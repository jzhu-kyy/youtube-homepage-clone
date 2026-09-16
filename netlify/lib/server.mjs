import { createHash, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { getStore } from "@netlify/blobs";

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
};

export function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
}

export function methodNotAllowed() {
  return json({ error: "Method not allowed" }, 405);
}

export function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

export function hashKey(value) {
  return createHash("sha256").update(String(value)).digest("hex");
}

export function hashPassword(password, salt = randomBytes(16).toString("hex")) {
  return { salt, hash: scryptSync(password, salt, 64).toString("hex") };
}

export function verifyPassword(password, salt, storedHash) {
  const actual = scryptSync(password, salt, 64);
  const expected = Buffer.from(storedHash, "hex");
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export function bearerToken(req) {
  const header = req.headers.get("authorization") || "";
  return header.startsWith("Bearer ") ? header.slice(7).trim() : "";
}

export async function createSession(user) {
  const token = randomBytes(32).toString("base64url");
  const sessions = getStore({ name: "youtube-sessions", consistency: "strong" });
  await sessions.setJSON(`session-${hashKey(token)}`, {
    user: { id: user.id, name: user.name, email: user.email },
    expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 30,
  });
  return token;
}

export async function readSession(req) {
  const token = bearerToken(req);
  if (!token) return null;
  const sessions = getStore({ name: "youtube-sessions", consistency: "strong" });
  const key = `session-${hashKey(token)}`;
  const session = await sessions.get(key, { type: "json", consistency: "strong" });
  if (!session) return null;
  if (session.expiresAt < Date.now()) {
    await sessions.delete(key);
    return null;
  }
  return { ...session, token, key };
}

export async function deleteSession(req) {
  const token = bearerToken(req);
  if (!token) return;
  const sessions = getStore({ name: "youtube-sessions", consistency: "strong" });
  await sessions.delete(`session-${hashKey(token)}`);
}

export function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email };
}
