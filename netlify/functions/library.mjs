import { getStore } from "@netlify/blobs";
import { json, methodNotAllowed, readSession } from "../lib/server.mjs";

const emptyLibrary = () => ({ favorites: [], history: [], updatedAt: new Date().toISOString() });

export default async (req) => {
  try {
    const session = await readSession(req);
    if (!session) return json({ error: "Sign in to use your library" }, 401);

    const libraries = getStore({ name: "youtube-user-library", consistency: "strong" });
    const key = `library-${session.user.id}`;
    const current = (await libraries.get(key, { type: "json", consistency: "strong" })) || emptyLibrary();

    if (req.method === "GET") return json(current);
    if (req.method !== "POST") return methodNotAllowed();

    const body = await req.json().catch(() => ({}));
    const video = body.video && typeof body.video === "object" ? {
      id: String(body.video.id || "").slice(0, 40),
      title: String(body.video.title || "").slice(0, 180),
      channel: String(body.video.channel || "").slice(0, 100),
      duration: String(body.video.duration || "").slice(0, 20),
      thumbnail: String(body.video.thumbnail || "").slice(0, 500),
    } : null;

    if (["favorite", "watch"].includes(body.action) && (!video || !video.id || !video.title)) return json({ error: "Invalid video" }, 400);

    if (body.action === "favorite") {
      const exists = current.favorites.some(item => item.id === video.id);
      current.favorites = exists ? current.favorites.filter(item => item.id !== video.id) : [{ ...video, savedAt: new Date().toISOString() }, ...current.favorites].slice(0, 100);
    } else if (body.action === "watch") {
      current.history = [{ ...video, watchedAt: new Date().toISOString() }, ...current.history.filter(item => item.id !== video.id)].slice(0, 100);
    } else if (body.action === "clear-history") {
      current.history = [];
    } else {
      return json({ error: "Unknown action" }, 400);
    }

    current.updatedAt = new Date().toISOString();
    await libraries.setJSON(key, current);
    return json(current);
  } catch (error) {
    console.error("library function error", error);
    return json({ error: "Library service is temporarily unavailable" }, 500);
  }
};
