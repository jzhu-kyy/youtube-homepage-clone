import { randomUUID } from "node:crypto";
import { getStore } from "@netlify/blobs";
import {
  createSession,
  deleteSession,
  hashKey,
  hashPassword,
  json,
  methodNotAllowed,
  normalizeEmail,
  publicUser,
  readSession,
  verifyPassword,
} from "../lib/server.mjs";

export default async (req) => {
  try {
    if (req.method === "GET") {
      const session = await readSession(req);
      return session ? json({ user: session.user }) : json({ error: "Session expired" }, 401);
    }

    if (req.method !== "POST") return methodNotAllowed();
    const body = await req.json().catch(() => ({}));

    if (body.action === "logout") {
      await deleteSession(req);
      return json({ ok: true });
    }

    const email = normalizeEmail(body.email);
    const password = String(body.password || "");
    if (!/^\S+@\S+\.\S+$/.test(email)) return json({ error: "Enter a valid email address" }, 400);
    if (password.length < 8) return json({ error: "Password must be at least 8 characters" }, 400);

    const users = getStore({ name: "youtube-users", consistency: "strong" });
    const key = `user-${hashKey(email)}`;
    const existing = await users.get(key, { type: "json", consistency: "strong" });

    if (body.action === "signup") {
      const name = String(body.name || "").trim();
      if (name.length < 2 || name.length > 50) return json({ error: "Enter a name between 2 and 50 characters" }, 400);
      if (existing) return json({ error: "An account with this email already exists" }, 409);
      const credentials = hashPassword(password);
      const user = { id: randomUUID(), name, email, ...credentials, createdAt: new Date().toISOString() };
      const result = await users.setJSON(key, user, { onlyIfNew: true });
      if (!result.modified) return json({ error: "An account with this email already exists" }, 409);
      const token = await createSession(user);
      return json({ token, user: publicUser(user) }, 201);
    }

    if (body.action === "login") {
      if (!existing || !verifyPassword(password, existing.salt, existing.hash)) return json({ error: "Email or password is incorrect" }, 401);
      const token = await createSession(existing);
      return json({ token, user: publicUser(existing) });
    }

    return json({ error: "Unknown action" }, 400);
  } catch (error) {
    console.error("auth function error", error);
    return json({ error: "Authentication service is temporarily unavailable" }, 500);
  }
};
