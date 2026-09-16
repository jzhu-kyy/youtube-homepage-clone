"use strict";

const videos = [
  {
    id: "M7lc1UVf-VE",
    title: "YouTube Developers Live: Embedded Web Player Customization",
    channel: "Google for Developers",
    handle: "@GoogleDevelopers",
    avatar: "G",
    avatarColor: "linear-gradient(145deg,#4285f4,#34a853)",
    category: "Coding",
    views: 1280000,
    ageDays: 4,
    duration: "18:42",
    subscribers: "2.5M subscribers",
    verified: true,
    progress: 36,
    description: "A developer-focused walkthrough of YouTube's embedded web player and the customization options available for building video experiences on the web."
  },
  {
    id: "jNQXAC9IVRw",
    title: "The first video on the internet, remastered",
    channel: "Internet Archive",
    handle: "@internetarchive",
    avatar: "IA",
    avatarColor: "linear-gradient(145deg,#0891b2,#22c55e)",
    category: "Trending",
    views: 348000000,
    ageDays: 720,
    duration: "0:19",
    subscribers: "8.1M subscribers",
    verified: true,
    description: "A tiny moment that became internet history. Revisit one of the earliest and most recognizable uploads on the platform."
  },
  {
    id: "aqz-KE-bpKQ",
    title: "Big Buck Bunny — Blender Open Movie",
    channel: "Blender Studio",
    handle: "@blenderstudio",
    avatar: "B",
    avatarColor: "linear-gradient(145deg,#2563eb,#06b6d4)",
    category: "Movies",
    views: 42000000,
    ageDays: 1100,
    duration: "9:56",
    subscribers: "1.9M subscribers",
    verified: true,
    description: "Big Buck Bunny is an open movie from the Blender Foundation. Enjoy the full short film and a milestone in open-source animation."
  },
  {
    id: "5qap5aO4i9A",
    title: "lofi hip hop radio 📚 beats to relax/study to",
    channel: "Lofi Girl",
    handle: "@LofiGirl",
    avatar: "LG",
    avatarColor: "linear-gradient(145deg,#b45309,#f97316)",
    category: "Music",
    views: 720000000,
    ageDays: 2,
    duration: "LIVE",
    subscribers: "15.2M subscribers",
    verified: true,
    description: "A calm, continuous selection of lofi beats for studying, working, and relaxing. Put on your headphones and settle in."
  },
  {
    id: "jfKfPfyJRdk",
    title: "late night coding session — focus playlist",
    channel: "Lofi Girl",
    handle: "@LofiGirl",
    avatar: "LG",
    avatarColor: "linear-gradient(145deg,#b45309,#f97316)",
    category: "Coding",
    views: 18400000,
    ageDays: 16,
    duration: "1:02:18",
    subscribers: "15.2M subscribers",
    verified: true,
    progress: 68,
    description: "Music for that last push through your build. A focused set for debugging, designing, and shipping."
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Rick Astley — Never Gonna Give You Up (Official Video)",
    channel: "Rick Astley",
    handle: "@RickAstleyYT",
    avatar: "RA",
    avatarColor: "linear-gradient(145deg,#ef4444,#7c3aed)",
    category: "Music",
    views: 1600000000,
    ageDays: 610,
    duration: "3:33",
    subscribers: "4.2M subscribers",
    verified: true,
    description: "The official video for Rick Astley's global hit. An enduring piece of music and internet culture."
  },
  {
    id: "LXb3EKWsInQ",
    title: "COSTA RICA IN 4K — nature, wildlife and adventure",
    channel: "Around The World",
    handle: "@aroundtheworld",
    avatar: "AW",
    avatarColor: "linear-gradient(145deg,#059669,#84cc16)",
    category: "Travel",
    views: 8300000,
    ageDays: 95,
    duration: "5:14",
    subscribers: "812K subscribers",
    verified: false,
    description: "Explore lush forests, dramatic coastlines, and the extraordinary wildlife of Costa Rica in crisp 4K."
  },
  {
    id: "9bZkp7q19f0",
    title: "PSY — GANGNAM STYLE (Official Music Video)",
    channel: "officialpsy",
    handle: "@officialpsy",
    avatar: "PSY",
    avatarColor: "linear-gradient(145deg,#111827,#facc15)",
    category: "Music",
    views: 5400000000,
    ageDays: 1200,
    duration: "4:13",
    subscribers: "19.1M subscribers",
    verified: true,
    description: "The official music video for PSY's record-breaking hit GANGNAM STYLE."
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Luis Fonsi — Despacito ft. Daddy Yankee",
    channel: "Luis Fonsi",
    handle: "@luisfonsi",
    avatar: "LF",
    avatarColor: "linear-gradient(145deg,#0284c7,#f43f5e)",
    category: "Music",
    views: 8500000000,
    ageDays: 1520,
    duration: "4:42",
    subscribers: "32.4M subscribers",
    verified: true,
    description: "The official video for Despacito by Luis Fonsi featuring Daddy Yankee."
  },
  {
    id: "ScMzIvxBSi4",
    title: "Product design in 8 minutes: a practical crash course",
    channel: "Build Better",
    handle: "@buildbetter",
    avatar: "BB",
    avatarColor: "linear-gradient(145deg,#0f766e,#06b6d4)",
    category: "Design",
    views: 642000,
    ageDays: 11,
    duration: "8:01",
    subscribers: "344K subscribers",
    verified: false,
    description: "A fast, practical introduction to product design: defining the problem, finding signals, exploring solutions, prototyping, and learning from real users."
  },
  {
    id: "ysz5S6PUM-U",
    title: "What actually happens when you type a URL?",
    channel: "Computerphile",
    handle: "@Computerphile",
    avatar: "C",
    avatarColor: "linear-gradient(145deg,#334155,#475569)",
    category: "Coding",
    views: 4300000,
    ageDays: 31,
    duration: "12:27",
    subscribers: "2.6M subscribers",
    verified: true,
    description: "DNS, TLS, HTTP, rendering, and everything in between—explained as one journey from the address bar to a finished page."
  },
  {
    id: "C0DPdy98e4c",
    title: "The tiny cat video that made everyone smile",
    channel: "Daily Paws",
    handle: "@dailypaws",
    avatar: "DP",
    avatarColor: "linear-gradient(145deg,#f59e0b,#ec4899)",
    category: "Trending",
    views: 9700000,
    ageDays: 3,
    duration: "1:04",
    subscribers: "1.1M subscribers",
    verified: false,
    description: "One minute of pure joy. Turn the sound on and meet the internet's newest favorite cat."
  }
];

const navSections = [
  { title: "", items: [["Home", "home"], ["Shorts", "shorts"]] },
  { title: "Subscriptions ›", subscription: true, items: [["Timothy Leung", "T"], ["Lauren Kim", "L"], ["rachel cha", "R"], ["kimi", "K"], ["amyypan", "A"], ["Andrew Haynes", "AH"]] },
  { title: "You ›", items: [["Your channel", "library"], ["History", "history"], ["Playlists", "playlist"], ["Watch later", "watchlater"], ["Liked videos", "like"]] },
  { title: "", items: [["Settings", "settings"], ["Help", "help"]] }
];

const comments = [
  { name: "@maya.designs", age: "2 days ago", avatar: "M", text: "The pacing and visual hierarchy are so good. I especially liked seeing the reasoning behind the small interaction details.", likes: "1.2K" },
  { name: "@tomcodes", age: "1 day ago", avatar: "T", text: "This gave me exactly the push I needed to finish my portfolio build. Clear, practical, and beautifully presented.", likes: "483" },
  { name: "@samira", age: "18 hours ago", avatar: "S", text: "Love that this focuses on the full experience instead of just copying pixels. More videos like this please!", likes: "219" }
];

const shorts = [
  { id: "KJfGtpNelD0", title: "college day 4 — help me pick an outfit", views: "828K views" },
  { id: "pbjt5jOdblc", title: "The SAT score you actually need", views: "44K views" },
  { id: "YJYGedrbRIM", title: "college vlog: game day and interviews", views: "178K views" },
  { id: "To9BNBAP69E", title: "college decisions 2026", views: "76K views" },
  { id: "cB0xf0CbBAo", title: "that one girl with no friends", views: "4.2M views" }
];

function initialFocusState() {
  try {
    const saved = JSON.parse(sessionStorage.getItem("focustube_session") || "null");
    if (saved?.active && saved.topic && saved.startedAt) return { ...saved, watched: Array.isArray(saved.watched) ? saved.watched : [] };
  } catch {}
  return { active: false, topic: "", startedAt: 0, watched: [], nudges: 0, distractionsAvoided: 0 };
}

const state = {
  category: "All",
  feedChip: "All",
  query: "",
  sort: "Recommended",
  compact: false,
  liked: new Set(),
  userLikes: new Set(),
  subscribed: new Set(),
  descriptionOpen: false,
  user: null,
  authToken: localStorage.getItem("yt_auth_token") || "",
  authMode: "login",
  library: { favorites: [], history: [], focusSessions: [] },
  libraryLoading: false,
  libraryError: "",
  focus: initialFocusState()
};

const app = document.getElementById("app");
const main = document.getElementById("mainContent");
const sidebarNav = document.getElementById("sidebarNav");
const searchInput = document.getElementById("searchInput");
const profileMenu = document.getElementById("profileMenu");
const profileButton = document.getElementById("profileButton");
const profileMenuAvatar = document.getElementById("profileMenuAvatar");
const profileMenuName = document.getElementById("profileMenuName");
const profileMenuEmail = document.getElementById("profileMenuEmail");
const logoutButton = document.getElementById("logoutButton");
const authModal = document.getElementById("authModal");
const authForm = document.getElementById("authForm");
const authName = document.getElementById("authName");
const authEmail = document.getElementById("authEmail");
const authPassword = document.getElementById("authPassword");
const authMessage = document.getElementById("authMessage");
const authSubmit = document.getElementById("authSubmit");
const nameField = document.getElementById("nameField");
const networkBanner = document.getElementById("networkBanner");
const pageLoader = document.getElementById("pageLoader");
const toast = document.getElementById("toast");
const focusWelcomeModal = document.getElementById("focusWelcomeModal");
const focusChoiceStep = document.getElementById("focusChoiceStep");
const focusSetupStep = document.getElementById("focusSetupStep");
const focusTopicInput = document.getElementById("focusTopicInput");
const focusIsland = document.getElementById("focusIsland");
const focusIslandTopic = document.getElementById("focusIslandTopic");
const focusTimer = document.getElementById("focusTimer");
const focusNudge = document.getElementById("focusNudge");
const focusNudgeText = document.getElementById("focusNudgeText");
const focusSummaryModal = document.getElementById("focusSummaryModal");

let focusTimerHandle;
let pendingFocusVideoId = "";

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function formatViews(count) {
  if (count >= 1_000_000_000) return `${(count / 1_000_000_000).toFixed(count >= 10_000_000_000 ? 0 : 1)}B views`;
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(count >= 10_000_000 ? 0 : 1)}M views`;
  if (count >= 1_000) return `${Math.round(count / 1_000)}K views`;
  return `${count} views`;
}

function formatAge(days) {
  if (days < 7) return `${days} day${days === 1 ? "" : "s"} ago`;
  if (days < 30) { const value = Math.round(days / 7); return `${value} week${value === 1 ? "" : "s"} ago`; }
  if (days < 365) { const value = Math.round(days / 30); return `${value} month${value === 1 ? "" : "s"} ago`; }
  const value = Math.round(days / 365);
  return `${value} year${value === 1 ? "" : "s"} ago`;
}

function thumbnail(video) {
  return `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
}

function videoPayload(video) {
  return { id: video.id, title: video.title, channel: video.channel, duration: video.duration, thumbnail: thumbnail(video) };
}

async function api(path, options = {}) {
  const headers = { ...(options.body ? { "content-type": "application/json" } : {}), ...(options.headers || {}) };
  if (state.authToken) headers.authorization = `Bearer ${state.authToken}`;
  let response;
  try {
    response = await fetch(path, { ...options, headers });
  } catch {
    showNetworkMessage("Can’t reach the server. Check your connection and try again.");
    throw new Error("Can’t reach the server");
  }
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data.error || "Something went wrong");
    error.status = response.status;
    throw error;
  }
  return data;
}

function showNetworkMessage(message) {
  networkBanner.textContent = message;
  networkBanner.hidden = false;
}

function hideNetworkMessage() {
  networkBanner.hidden = true;
}

function formatFocusTime(totalSeconds) {
  const seconds = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;
  return hours ? `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}` : `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

function focusElapsedSeconds() {
  return state.focus.active ? Math.max(0, Math.floor((Date.now() - state.focus.startedAt) / 1000)) : 0;
}

function persistFocusSession() {
  if (state.focus.active) sessionStorage.setItem("focustube_session", JSON.stringify(state.focus));
  else sessionStorage.removeItem("focustube_session");
}

function updateFocusIsland() {
  if (!state.focus.active) {
    focusIsland.hidden = true;
    return;
  }
  focusIsland.hidden = false;
  focusIslandTopic.textContent = state.focus.topic;
  focusTimer.textContent = formatFocusTime(focusElapsedSeconds());
}

function startFocusTimer() {
  clearInterval(focusTimerHandle);
  updateFocusIsland();
  focusTimerHandle = setInterval(updateFocusIsland, 1000);
}

function videoMatchesFocus(video) {
  if (!state.focus.active) return true;
  const topic = state.focus.topic.toLowerCase();
  const ignored = new Set(["the", "and", "for", "with", "from", "learn", "learning", "study", "about"]);
  const tokens = topic.split(/[^a-z0-9]+/).filter(token => token.length > 2 && !ignored.has(token));
  const haystack = `${video.title} ${video.channel} ${video.category} ${video.description || ""}`.toLowerCase();
  const exactMatch = tokens.some(token => haystack.includes(token));
  if (exactMatch) return true;
  if (["Music", "Movies", "Trending"].includes(video.category)) return false;
  return ["Coding", "Design"].includes(video.category);
}

function focusedVideos() {
  const topic = state.focus.topic.toLowerCase();
  const tokens = topic.split(/[^a-z0-9]+/).filter(token => token.length > 2);
  return videos.filter(videoMatchesFocus).sort((a, b) => {
    const aText = `${a.title} ${a.category} ${a.description}`.toLowerCase();
    const bText = `${b.title} ${b.category} ${b.description}`.toLowerCase();
    const aScore = tokens.filter(token => aText.includes(token)).length;
    const bScore = tokens.filter(token => bText.includes(token)).length;
    return bScore - aScore || b.views - a.views;
  });
}

function openFocusWelcome() {
  focusChoiceStep.hidden = false;
  focusSetupStep.hidden = true;
  focusWelcomeModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeFocusWelcome() {
  focusWelcomeModal.hidden = true;
  document.body.style.overflow = "";
}

function startFocusSession(topic) {
  state.focus = { active: true, topic: topic.trim(), startedAt: Date.now(), watched: [], nudges: 0, distractionsAvoided: 0 };
  sessionStorage.setItem("focus_prompt_seen", "true");
  persistFocusSession();
  closeFocusWelcome();
  state.category = "All";
  state.feedChip = "All";
  state.query = "";
  searchInput.value = "";
  location.hash = "";
  startFocusTimer();
  renderHome();
  showToast(`FocusTube started: ${state.focus.topic}`);
}

function trackFocusVideo(video) {
  if (!state.focus.active || state.focus.watched.includes(video.id)) return;
  state.focus.watched.push(video.id);
  persistFocusSession();
}

function showFocusNudge(video) {
  pendingFocusVideoId = video.id;
  state.focus.nudges += 1;
  persistFocusSession();
  focusNudgeText.textContent = `“${video.title}” may not support your goal: ${state.focus.topic}.`;
  focusNudge.hidden = false;
}

async function saveFocusSummary(summary) {
  if (!state.user) return;
  try {
    state.library = await api("/api/library", { method: "POST", body: JSON.stringify({ action: "focus-session", session: summary }) });
  } catch {}
}

function endFocusSession() {
  if (!state.focus.active) return;
  const summary = {
    topic: state.focus.topic,
    durationSeconds: focusElapsedSeconds(),
    videosWatched: state.focus.watched.length,
    distractionsAvoided: state.focus.distractionsAvoided,
    endedAt: new Date().toISOString()
  };
  clearInterval(focusTimerHandle);
  state.focus.active = false;
  persistFocusSession();
  focusIsland.hidden = true;
  focusNudge.hidden = true;
  document.getElementById("summaryTime").textContent = formatFocusTime(summary.durationSeconds);
  document.getElementById("summaryVideos").textContent = String(summary.videosWatched);
  document.getElementById("summaryNudges").textContent = String(summary.distractionsAvoided);
  document.getElementById("summaryTopic").textContent = summary.topic;
  document.getElementById("focusSummarySubtitle").textContent = summary.videosWatched ? "Nice work showing up with intention." : "You protected time for your learning goal.";
  focusSummaryModal.hidden = false;
  document.body.style.overflow = "hidden";
  saveFocusSummary(summary);
  render();
}

function verifiedBadge(video) {
  return video.verified ? '<span class="verified" title="Verified"><span class="icon" data-icon="check"></span></span>' : "";
}

function renderSidebar() {
  sidebarNav.innerHTML = navSections.map((section, sectionIndex) => `
    <section class="sidebar__section">
      ${section.title ? `<h2 class="sidebar__title">${section.title}</h2>` : ""}
      ${section.items.map(([label, icon], itemIndex) => `
        <button class="sidebar__item ${sectionIndex === 0 && itemIndex === 0 ? "is-active" : ""}" data-nav="${escapeHtml(label)}">
          ${section.subscription ? `<span class="sidebar__subscription-avatar">${escapeHtml(icon)}</span>` : `<span class="icon" data-icon="${icon}"></span>`}
          <span>${escapeHtml(label)}</span>
        </button>`).join("")}
    </section>
  `).join("");
}

function setAuthMode(mode) {
  state.authMode = mode;
  const signingUp = mode === "signup";
  document.querySelectorAll("[data-auth-tab]").forEach(button => button.classList.toggle("is-active", button.dataset.authTab === mode));
  document.getElementById("authTitle").textContent = signingUp ? "Create your account" : "Sign in";
  document.getElementById("authSubtitle").textContent = signingUp ? "Save videos and keep your history on every device." : "Continue to your saved videos and watch history.";
  nameField.hidden = !signingUp;
  authName.required = signingUp;
  authPassword.autocomplete = signingUp ? "new-password" : "current-password";
  authSubmit.querySelector(".button-label").textContent = signingUp ? "Create account" : "Sign in";
  authMessage.textContent = "";
}

function openAuthModal(mode = "login") {
  setAuthMode(mode);
  authModal.hidden = false;
  document.body.style.overflow = "hidden";
  setTimeout(() => (mode === "signup" ? authName : authEmail).focus(), 0);
}

function closeAuthModal() {
  authModal.hidden = true;
  document.body.style.overflow = "";
  authMessage.textContent = "";
}

function updateAuthUI() {
  if (state.user) {
    const initial = state.user.name.trim().charAt(0).toUpperCase() || "U";
    profileButton.className = "profile-button--signed-in";
    profileButton.textContent = initial;
    profileButton.setAttribute("aria-label", `Open profile for ${state.user.name}`);
    profileMenuAvatar.textContent = initial;
    profileMenuName.textContent = state.user.name;
    profileMenuEmail.textContent = state.user.email;
    logoutButton.hidden = false;
  } else {
    profileButton.className = "sign-in-button";
    profileButton.textContent = "Sign in";
    profileButton.setAttribute("aria-label", "Sign in");
    profileMenuName.textContent = "Guest";
    profileMenuEmail.textContent = "Not signed in";
    logoutButton.hidden = true;
    profileMenu.hidden = true;
  }
}

function clearSession() {
  state.user = null;
  state.authToken = "";
  state.library = { favorites: [], history: [], focusSessions: [] };
  state.liked.clear();
  localStorage.removeItem("yt_auth_token");
  updateAuthUI();
}

async function restoreSession() {
  if (!state.authToken) {
    updateAuthUI();
    return;
  }
  pageLoader.hidden = false;
  try {
    const data = await api("/api/auth");
    state.user = data.user;
    updateAuthUI();
    await loadLibrary(false);
  } catch (error) {
    if (error.status === 401) clearSession();
  } finally {
    pageLoader.hidden = true;
  }
}

async function loadLibrary(shouldRender = true) {
  if (!state.user) return;
  state.libraryLoading = true;
  state.libraryError = "";
  if (shouldRender && ["#history", "#favorites"].includes(location.hash)) render();
  try {
    state.library = await api("/api/library");
    state.liked = new Set(state.library.favorites.map(item => item.id));
    hideNetworkMessage();
  } catch (error) {
    state.libraryError = error.message;
    if (error.status === 401) clearSession();
  } finally {
    state.libraryLoading = false;
    if (shouldRender && ["#history", "#favorites"].includes(location.hash)) render();
  }
}

function videoCard(video) {
  return `
    <article class="video-card" data-video-id="${video.id}" tabindex="0" aria-label="Watch ${escapeHtml(video.title)}">
      <div class="video-card__thumb-wrap">
        <img class="video-card__thumb" src="${thumbnail(video)}" alt="" loading="lazy" />
        <span class="video-card__duration">${video.duration}</span>
        ${video.progress ? `<span class="video-card__progress"><span style="--progress:${video.progress}%"></span></span>` : ""}
      </div>
      <div class="video-card__body">
        <span class="avatar video-card__avatar" style="background:${video.avatarColor}">${escapeHtml(video.avatar)}</span>
        <div>
          <h2 class="video-card__title">${escapeHtml(video.title)}</h2>
          <p class="video-card__channel">${escapeHtml(video.channel)}${verifiedBadge(video)}</p>
          <p class="video-card__stats">${formatViews(video.views)} · ${formatAge(video.ageDays)}</p>
        </div>
        <button class="icon-button more-button" data-more="${video.id}" aria-label="More actions"><span class="icon" data-icon="more"></span></button>
      </div>
    </article>`;
}

function filteredVideos() {
  const query = state.query.trim().toLowerCase();
  let result = videos.filter(video => {
    const matchesCategory = state.category === "All" || video.category === state.category || (state.category === "Live" && video.duration === "LIVE");
    const haystack = `${video.title} ${video.channel} ${video.category}`.toLowerCase();
    return matchesCategory && (!query || haystack.includes(query));
  });
  if (state.sort === "Most viewed") result = [...result].sort((a, b) => b.views - a.views);
  if (state.sort === "Newest") result = [...result].sort((a, b) => a.ageDays - b.ageDays);
  return result;
}

function sponsoredCard() {
  const video = videos[0];
  return `
    <article class="sponsored-card">
      <div class="video-card__thumb-wrap" data-video-id="${video.id}" tabindex="0" aria-label="Watch ${escapeHtml(video.title)}">
        <img class="video-card__thumb" src="${thumbnail(video)}" alt="" />
        <span class="video-card__duration">0:30</span>
      </div>
      <div class="video-card__body">
        <span class="avatar video-card__avatar" style="background:${video.avatarColor}">G</span>
        <div><h2 class="video-card__title">Build video experiences for every screen</h2><p class="video-card__channel"><span class="sponsored-card__label">Sponsored</span> · Google for Developers</p></div>
        <button class="icon-button more-button" aria-label="Ad options"><span class="icon" data-icon="more"></span></button>
      </div>
      <div class="sponsored-card__actions"><button data-ad-action="watch">Watch</button><button data-ad-action="learn">Learn more</button></div>
    </article>`;
}

function shortCard(item) {
  return `
    <article class="short-card" data-short-id="${item.id}" tabindex="0" aria-label="Watch Short: ${escapeHtml(item.title)}">
      <div class="short-card__thumb"><img src="https://i.ytimg.com/vi/${item.id}/oar2.jpg" alt="" loading="lazy" /></div>
      <h3>${escapeHtml(item.title)}</h3><p>${item.views}</p>
    </article>`;
}

function renderHome() {
  const allCategories = ["Your custom feed", "All", "Colleges", "Podcasts", "AP US History", "Music", "Advanced Placement", "High School Learning", "Mixes", "Live", "Gaming"];
  const categories = state.focus.active ? allCategories.filter(category => !["Music", "Mixes", "Gaming"].includes(category)) : allCategories;
  const isFocusFeed = state.focus.active && !state.query && state.category === "All";
  const results = isFocusFeed ? focusedVideos() : filteredVideos();
  const heading = state.query ? `Results for “${escapeHtml(state.query)}”` : "Recommended";
  const isDefaultFeed = !state.focus.active && !state.query && state.category === "All";
  main.innerHTML = `
    <div class="feed-shell">
      ${isFocusFeed ? `<header class="focus-feed-header"><div><p class="focus-feed-header__eyebrow">DISTRACTION-FREE FEED</p><h1>Learn ${escapeHtml(state.focus.topic)}</h1><p>Shorts and entertainment recommendations are hidden during this session.</p></div><span class="focus-feed-header__badge">${results.length} focused picks</span></header>` : ""}
      <div class="chips-bar" aria-label="Video categories">
        ${categories.map(category => `<button class="chip ${state.feedChip === category ? "is-active" : ""}" data-category="${category}">${category}</button>`).join("")}
      </div>
      ${isFocusFeed ? `${results.length ? `<div class="video-grid">${results.map(videoCard).join("")}</div>` : `<div class="empty-state"><div><div class="empty-state__icon">◎</div><h2>No focused videos found</h2><p>Try a broader learning topic or use search.</p></div></div>`}` : isDefaultFeed ? `
        <div class="home-top-grid">${sponsoredCard()}${videos.slice(1, 3).map(videoCard).join("")}</div>
        <section class="shorts-shelf" aria-labelledby="shortsHeading">
          <div class="shorts-shelf__header"><h2 class="shorts-shelf__title" id="shortsHeading"><span class="shorts-shelf__logo"></span>Shorts</h2><button class="icon-button" aria-label="Shorts actions"><span class="icon" data-icon="more"></span></button></div>
          <div class="shorts-grid">${shorts.map(shortCard).join("")}</div>
        </section>
        <div class="video-grid">${videos.slice(3).map(videoCard).join("")}</div>
      ` : `
        <div class="feed-heading">
          <div><h1>${heading}</h1><span class="feed-heading__meta">${results.length} video${results.length === 1 ? "" : "s"}</span></div>
          <label><span class="sr-only">Sort videos</span><select class="sort-select" id="sortSelect">${["Recommended", "Most viewed", "Newest"].map(option => `<option ${state.sort === option ? "selected" : ""}>${option}</option>`).join("")}</select></label>
        </div>
        ${results.length ? `<div class="video-grid">${results.map(videoCard).join("")}</div>` : `
        <div class="empty-state"><div><div class="empty-state__icon">⌕</div><h2>No videos found</h2><p>Try another search or category.</p></div></div>`}
      `}
    </div>`;
  bindHomeEvents();
}

function libraryCard(item, kind) {
  const date = item[kind === "history" ? "watchedAt" : "savedAt"];
  return `
    <article class="library-card" data-video-id="${escapeHtml(item.id)}" tabindex="0" aria-label="Watch ${escapeHtml(item.title)}">
      <div class="video-card__thumb-wrap">
        <img class="video-card__thumb" src="${escapeHtml(item.thumbnail || `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`)}" alt="" loading="lazy" />
        ${item.duration ? `<span class="video-card__duration">${escapeHtml(item.duration)}</span>` : ""}
      </div>
      <div class="video-card__body">
        <div>
          <h2 class="video-card__title">${escapeHtml(item.title)}</h2>
          <p class="video-card__channel">${escapeHtml(item.channel)}</p>
          <time datetime="${escapeHtml(date || "")}">${kind === "history" ? "Watched" : "Saved"} ${date ? new Date(date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) : "recently"}</time>
        </div>
        ${kind === "favorites" ? `<button class="icon-button more-button" data-remove-favorite="${escapeHtml(item.id)}" aria-label="Remove from saved videos"><span aria-hidden="true">×</span></button>` : ""}
      </div>
    </article>`;
}

function librarySkeleton() {
  return `<div class="skeleton-grid" aria-label="Loading videos">${Array.from({ length: 6 }, () => `<div><div class="skeleton-card__thumb"></div><div class="skeleton-line"></div><div class="skeleton-line skeleton-line--short"></div></div>`).join("")}</div>`;
}

function renderLibrary(kind) {
  const isHistory = kind === "history";
  const title = isHistory ? "Watch history" : "Saved videos";
  const items = state.library[isHistory ? "history" : "favorites"] || [];
  let content;

  if (!state.user) {
    content = `<div class="empty-state"><div><div class="empty-state__icon">${isHistory ? "◷" : "♡"}</div><h2>Keep track of what you watch</h2><p>Sign in to see your ${isHistory ? "watch history" : "saved videos"} on any device.</p><div class="empty-state__actions"><button data-open-auth>Sign in</button></div></div></div>`;
  } else if (state.libraryLoading) {
    content = librarySkeleton();
  } else if (state.libraryError) {
    content = `<div class="empty-state"><div><div class="empty-state__icon">!</div><h2>Couldn’t load this page</h2><p>${escapeHtml(state.libraryError)}</p><div class="empty-state__actions"><button data-retry-library>Try again</button></div></div></div>`;
  } else if (!items.length) {
    content = `<div class="empty-state"><div><div class="empty-state__icon">${isHistory ? "◷" : "♡"}</div><h2>${isHistory ? "No watch history yet" : "No saved videos yet"}</h2><p>${isHistory ? "Videos you watch will appear here." : "Tap Save on a video and it will appear here."}</p><div class="empty-state__actions"><button data-go-home>Browse videos</button></div></div></div>`;
  } else {
    content = `<div class="library-grid">${items.map(item => libraryCard(item, kind)).join("")}</div>`;
  }

  main.innerHTML = `<section class="library-shell"><header class="library-header"><div><h1>${title}</h1><p>${state.user ? `${items.length} video${items.length === 1 ? "" : "s"} · Synced to ${escapeHtml(state.user.email)}` : "Sign in to sync this page"}</p></div>${isHistory && state.user && items.length ? `<button class="library-header__action" id="clearHistory">Clear all watch history</button>` : ""}</header>${content}</section>`;

  document.querySelector("[data-open-auth]")?.addEventListener("click", () => openAuthModal());
  document.querySelector("[data-retry-library]")?.addEventListener("click", () => loadLibrary());
  document.querySelector("[data-go-home]")?.addEventListener("click", () => { location.hash = ""; });
  document.getElementById("clearHistory")?.addEventListener("click", clearHistory);
  document.querySelectorAll("[data-remove-favorite]").forEach(button => button.addEventListener("click", event => {
    event.stopPropagation();
    const video = videos.find(item => item.id === button.dataset.removeFavorite) || state.library.favorites.find(item => item.id === button.dataset.removeFavorite);
    if (video) toggleFavorite(video);
  }));
  bindVideoLinks(main);
}

function getSelectedVideo() {
  const id = new URLSearchParams(location.hash.replace(/^#/, "")).get("watch");
  return videos.find(video => video.id === id) || null;
}

function upNextCard(video) {
  return `
    <article class="up-next-card" data-video-id="${video.id}" tabindex="0" aria-label="Watch ${escapeHtml(video.title)}">
      <div class="up-next-card__thumb">
        <img src="${thumbnail(video)}" alt="" loading="lazy" />
        <span class="video-card__duration">${video.duration}</span>
      </div>
      <div>
        <h3>${escapeHtml(video.title)}</h3>
        <p>${escapeHtml(video.channel)} ${video.verified ? "✓" : ""}</p>
        <p>${formatViews(video.views)} · ${formatAge(video.ageDays)}</p>
      </div>
    </article>`;
}

function renderWatch(video) {
  const isLiked = state.userLikes.has(video.id);
  const isSaved = state.liked.has(video.id);
  const isSubscribed = state.subscribed.has(video.channel);
  const recommendations = videos.filter(item => item.id !== video.id && (!state.focus.active || videoMatchesFocus(item))).slice(0, 8);
  main.innerHTML = `
    <div class="watch-shell">
      <div class="watch-layout">
        <section class="watch-primary">
          <div class="player-frame">
            <iframe src="https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0" title="${escapeHtml(video.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div class="watch-detail">
            ${state.focus.active ? `<div class="focus-watch-context"><span>◎ FocusTube</span>Learning ${escapeHtml(state.focus.topic)}</div>` : ""}
            <h1 class="watch-title">${escapeHtml(video.title)}</h1>
            <div class="watch-actions">
              <div class="channel-block">
                <span class="avatar" style="background:${video.avatarColor}">${escapeHtml(video.avatar)}</span>
                <div class="channel-block__text"><strong>${escapeHtml(video.channel)}${verifiedBadge(video)}</strong><span>${video.subscribers}</span></div>
                <button class="subscribe-button ${isSubscribed ? "is-subscribed" : ""}" id="subscribeButton">${isSubscribed ? "Subscribed" : "Subscribe"}</button>
              </div>
              <button class="action-pill ${isLiked ? "is-active" : ""}" id="likeButton"><span class="icon" data-icon="like"></span>${isLiked ? "Liked" : "24K"}</button>
              <button class="action-pill" id="shareButton"><span class="icon" data-icon="share"></span>Share</button>
              <button class="action-pill ${isSaved ? "is-active" : ""}" id="saveButton"><span class="icon" data-icon="save"></span>${isSaved ? "Saved" : "Save"}</button>
              <button class="icon-button icon-button--filled" aria-label="More"><span class="icon" data-icon="more"></span></button>
            </div>
            <div class="description-box ${state.descriptionOpen ? "is-open" : ""}" id="descriptionBox">
              <strong>${formatViews(video.views)}</strong><strong>${formatAge(video.ageDays)}</strong>
              <p>${escapeHtml(video.description)}<br /><br />#${video.category.toLowerCase()} #creators #youtubeclone</p>
            </div>
          </div>
          <section class="comments">
            <div class="comments__header"><h2>${(video.views / 91).toFixed(0)} comments</h2><span>⇅ Sort by</span></div>
            <div class="comment-compose"><span class="avatar avatar--profile">J</span><input id="commentInput" aria-label="Add a comment" placeholder="Add a comment…" /></div>
            <div id="commentList">${comments.map(comment => `
              <article class="comment"><span class="avatar">${comment.avatar}</span><div><div class="comment__name">${comment.name}<span>${comment.age}</span></div><p>${comment.text}</p><div class="comment__actions"><span class="icon" data-icon="like"></span>${comment.likes}<span>Reply</span></div></div></article>`).join("")}</div>
          </section>
        </section>
        <aside class="up-next">
          <div class="up-next__chips"><button class="chip is-active">All</button><button class="chip">Related</button><button class="chip">From ${escapeHtml(video.channel)}</button></div>
          ${recommendations.map(upNextCard).join("")}
        </aside>
      </div>
    </div>`;
  bindWatchEvents(video);
}

function render() {
  if (location.hash === "#history") {
    renderLibrary("history");
    window.scrollTo({ top: 0, behavior: "instant" });
    return;
  }
  if (location.hash === "#favorites") {
    renderLibrary("favorites");
    window.scrollTo({ top: 0, behavior: "instant" });
    return;
  }
  const selected = getSelectedVideo();
  if (selected) renderWatch(selected);
  else renderHome();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function openVideo(id, bypassFocusCheck = false) {
  const video = videos.find(item => item.id === id);
  if (!video) return;
  if (state.focus.active && !bypassFocusCheck && !videoMatchesFocus(video)) {
    showFocusNudge(video);
    return;
  }
  trackFocusVideo(video);
  location.hash = `watch=${encodeURIComponent(id)}`;
  if (video && state.user) recordWatch(video);
}

async function recordWatch(video) {
  try {
    state.library = await api("/api/library", { method: "POST", body: JSON.stringify({ action: "watch", video: videoPayload(video) }) });
  } catch (error) {
    if (error.status === 401) clearSession();
  }
}

async function toggleFavorite(video) {
  if (!state.user) {
    openAuthModal();
    showToast("Sign in to save videos");
    return;
  }
  const wasSaved = state.liked.has(video.id);
  try {
    state.library = await api("/api/library", { method: "POST", body: JSON.stringify({ action: "favorite", video: videoPayload(video) }) });
    state.liked = new Set(state.library.favorites.map(item => item.id));
    render();
    showToast(wasSaved ? "Removed from saved videos" : "Saved to your library");
  } catch (error) {
    showToast(error.message);
  }
}

async function clearHistory() {
  try {
    state.libraryLoading = true;
    renderLibrary("history");
    state.library = await api("/api/library", { method: "POST", body: JSON.stringify({ action: "clear-history" }) });
    showToast("Watch history cleared");
  } catch (error) {
    state.libraryError = error.message;
  } finally {
    state.libraryLoading = false;
    renderLibrary("history");
  }
}

function bindVideoLinks(root = document) {
  root.querySelectorAll("[data-video-id]").forEach(card => {
    const activate = event => {
      if (event.target.closest("[data-more]")) return;
      if (event.type === "keydown" && !["Enter", " "].includes(event.key)) return;
      event.preventDefault();
      openVideo(card.dataset.videoId);
    };
    card.addEventListener("click", activate);
    card.addEventListener("keydown", activate);
  });
}

function bindHomeEvents() {
  document.querySelectorAll("[data-category]").forEach(button => button.addEventListener("click", () => {
    state.feedChip = button.dataset.category;
    state.category = videos.some(video => video.category === button.dataset.category) ? button.dataset.category : "All";
    renderHome();
    if (!["All", "Music", "Live"].includes(button.dataset.category)) showToast(`${button.dataset.category} feed loaded`);
  }));
  document.getElementById("sortSelect")?.addEventListener("change", event => {
    state.sort = event.target.value;
    renderHome();
  });
  document.querySelectorAll("[data-more]").forEach(button => button.addEventListener("click", event => {
    event.stopPropagation();
    showToast("Video actions opened");
  }));
  document.querySelectorAll("[data-short-id]").forEach(card => {
    const activate = event => {
      if (event.type === "keydown" && !["Enter", " "].includes(event.key)) return;
      event.preventDefault();
      showToast("Shorts player opened");
    };
    card.addEventListener("click", activate);
    card.addEventListener("keydown", activate);
  });
  document.querySelectorAll("[data-ad-action]").forEach(button => button.addEventListener("click", () => showToast(button.dataset.adAction === "watch" ? "Playing sponsored video" : "Opening advertiser page")));
  bindVideoLinks(main);
}

function bindWatchEvents(video) {
  document.getElementById("likeButton").addEventListener("click", () => {
    if (state.userLikes.has(video.id)) state.userLikes.delete(video.id); else state.userLikes.add(video.id);
    renderWatch(video);
    showToast(state.userLikes.has(video.id) ? "Liked" : "Like removed");
  });
  document.getElementById("subscribeButton").addEventListener("click", () => {
    if (state.subscribed.has(video.channel)) state.subscribed.delete(video.channel); else state.subscribed.add(video.channel);
    renderWatch(video);
    showToast(state.subscribed.has(video.channel) ? `Subscribed to ${video.channel}` : `Unsubscribed from ${video.channel}`);
  });
  document.getElementById("descriptionBox").addEventListener("click", () => {
    state.descriptionOpen = !state.descriptionOpen;
    document.getElementById("descriptionBox").classList.toggle("is-open", state.descriptionOpen);
  });
  document.getElementById("shareButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      showToast("Video link copied");
    } catch { showToast("Share link ready"); }
  });
  document.getElementById("saveButton").addEventListener("click", () => toggleFavorite(video));
  document.getElementById("commentInput").addEventListener("keydown", event => {
    if (event.key !== "Enter" || !event.target.value.trim()) return;
    if (!state.user) {
      event.preventDefault();
      openAuthModal();
      showToast("Sign in to comment");
      return;
    }
    const text = event.target.value.trim();
    const initial = state.user.name.charAt(0).toUpperCase();
    document.getElementById("commentList").insertAdjacentHTML("afterbegin", `<article class="comment"><span class="avatar avatar--profile">${escapeHtml(initial)}</span><div><div class="comment__name">${escapeHtml(state.user.name)}<span>now</span></div><p>${escapeHtml(text)}</p><div class="comment__actions"><span class="icon" data-icon="like"></span>0<span>Reply</span></div></div></article>`);
    event.target.value = "";
    showToast("Comment added locally");
  });
  bindVideoLinks(main);
}

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

document.getElementById("menuButton").addEventListener("click", () => {
  if (innerWidth <= 680) app.classList.toggle("is-mobile-nav-open");
  else {
    state.compact = !state.compact;
    app.classList.toggle("is-compact", state.compact);
  }
});

document.getElementById("brandButton").addEventListener("click", () => {
  state.category = "All";
  state.feedChip = "All";
  state.query = "";
  searchInput.value = "";
  location.hash = "";
  renderHome();
});

document.getElementById("searchForm").addEventListener("submit", event => {
  event.preventDefault();
  state.query = searchInput.value;
  state.category = "All";
  state.feedChip = "All";
  location.hash = "";
  renderHome();
});

searchInput.addEventListener("input", event => {
  if (location.hash) return;
  state.query = event.target.value;
  state.category = "All";
  state.feedChip = "All";
  renderHome();
  searchInput.focus();
  searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
});

document.getElementById("voiceButton").addEventListener("click", () => showToast("Try saying “coding” or “music”"));
document.getElementById("askButton").addEventListener("click", () => {
  if (state.focus.active) showToast(`FocusTube is active: ${state.focus.topic}`);
  else openFocusWelcome();
});
document.getElementById("createButton").addEventListener("click", () => showToast("Create menu opened"));
document.getElementById("notificationButton").addEventListener("click", () => showToast("You’re all caught up"));

document.getElementById("focusSkipButton").addEventListener("click", () => {
  sessionStorage.setItem("focus_prompt_seen", "true");
  closeFocusWelcome();
});
document.getElementById("focusChooseButton").addEventListener("click", () => {
  focusChoiceStep.hidden = true;
  focusSetupStep.hidden = false;
  setTimeout(() => focusTopicInput.focus(), 0);
});
document.getElementById("focusBackButton").addEventListener("click", () => {
  focusSetupStep.hidden = true;
  focusChoiceStep.hidden = false;
});
document.querySelectorAll("[data-focus-topic]").forEach(button => button.addEventListener("click", () => {
  focusTopicInput.value = button.dataset.focusTopic;
  focusTopicInput.focus();
}));
focusSetupStep.addEventListener("submit", event => {
  event.preventDefault();
  if (!focusTopicInput.reportValidity()) return;
  startFocusSession(focusTopicInput.value);
  focusTopicInput.value = "";
});
document.getElementById("focusEndButton").addEventListener("click", endFocusSession);
document.getElementById("focusNudgeClose").addEventListener("click", () => {
  focusNudge.hidden = true;
  pendingFocusVideoId = "";
});
document.getElementById("focusReturnButton").addEventListener("click", () => {
  state.focus.distractionsAvoided += 1;
  persistFocusSession();
  focusNudge.hidden = true;
  pendingFocusVideoId = "";
  state.query = "";
  state.category = "All";
  state.feedChip = "All";
  searchInput.value = "";
  location.hash = "";
  renderHome();
  showToast("Back to your learning goal");
});
document.getElementById("focusContinueButton").addEventListener("click", () => {
  const id = pendingFocusVideoId;
  focusNudge.hidden = true;
  pendingFocusVideoId = "";
  if (id) openVideo(id, true);
});
document.getElementById("focusSummaryClose").addEventListener("click", () => {
  focusSummaryModal.hidden = true;
  document.body.style.overflow = "";
});

profileButton.addEventListener("click", event => {
  event.stopPropagation();
  if (!state.user) {
    openAuthModal();
    return;
  }
  profileMenu.hidden = !profileMenu.hidden;
});

profileMenu.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.action === "logout") {
    api("/api/auth", { method: "POST", body: JSON.stringify({ action: "logout" }) }).catch(() => {});
    clearSession();
    profileMenu.hidden = true;
    render();
    showToast("Signed out");
  } else if (button.dataset.action === "theme") {
    document.body.classList.toggle("light");
    showToast(document.body.classList.contains("light") ? "Light theme" : "Dark theme");
  } else showToast(`${button.textContent.trim()} opened`);
  profileMenu.hidden = true;
});

document.querySelectorAll("[data-auth-tab]").forEach(button => button.addEventListener("click", () => setAuthMode(button.dataset.authTab)));
document.getElementById("authClose").addEventListener("click", closeAuthModal);
authModal.addEventListener("click", event => {
  if (event.target === authModal) closeAuthModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !authModal.hidden) closeAuthModal();
});

authForm.addEventListener("submit", async event => {
  event.preventDefault();
  authMessage.textContent = "";
  if (!authForm.reportValidity()) return;
  authSubmit.disabled = true;
  authSubmit.querySelector(".button-label").hidden = true;
  authSubmit.querySelector(".button-spinner").hidden = false;
  try {
    const data = await api("/api/auth", {
      method: "POST",
      body: JSON.stringify({ action: state.authMode, name: authName.value.trim(), email: authEmail.value.trim(), password: authPassword.value })
    });
    state.authToken = data.token;
    state.user = data.user;
    localStorage.setItem("yt_auth_token", data.token);
    updateAuthUI();
    await loadLibrary(false);
    closeAuthModal();
    authForm.reset();
    render();
    showToast(state.authMode === "signup" ? "Account created" : "Signed in");
  } catch (error) {
    authMessage.textContent = error.message;
  } finally {
    authSubmit.disabled = false;
    authSubmit.querySelector(".button-label").hidden = false;
    authSubmit.querySelector(".button-spinner").hidden = true;
  }
});

document.addEventListener("click", event => {
  if (!profileMenu.contains(event.target) && event.target.id !== "profileButton") profileMenu.hidden = true;
  if (app.classList.contains("is-mobile-nav-open") && !event.target.closest(".sidebar") && !event.target.closest("#menuButton")) app.classList.remove("is-mobile-nav-open");
});

sidebarNav.addEventListener("click", event => {
  const item = event.target.closest("[data-nav]");
  if (!item) return;
  const label = item.dataset.nav;
  if (state.focus.active && ["Shorts", "Trending", "Music", "Movies"].includes(label)) {
    showToast(`${label} is hidden during FocusTube`);
    app.classList.remove("is-mobile-nav-open");
    return;
  }
  if (["Home", "Trending", "Music", "Movies"].includes(label)) {
    state.category = label === "Home" ? "All" : label;
    state.feedChip = label === "Home" ? "All" : label;
    state.query = "";
    searchInput.value = "";
    location.hash = "";
    renderHome();
  } else if (label === "History") {
    location.hash = "history";
  } else if (["Watch later", "Liked videos"].includes(label)) {
    location.hash = "favorites";
  } else showToast(`${label} selected`);
  app.classList.remove("is-mobile-nav-open");
});

window.addEventListener("hashchange", render);

window.addEventListener("offline", () => showNetworkMessage("You’re offline. Saved pages remain visible, but syncing is paused."));
window.addEventListener("online", () => {
  hideNetworkMessage();
  if (state.user) loadLibrary();
});

document.addEventListener("error", event => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || image.dataset.fallbackApplied) return;
  image.dataset.fallbackApplied = "true";
  image.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 360'%3E%3Crect width='640' height='360' fill='%23e5e5e5'/%3E%3Cpath d='M285 128v104l91-52z' fill='%23909090'/%3E%3C/svg%3E";
}, true);

renderSidebar();
updateAuthUI();
render();
restoreSession().then(render);
if (state.focus.active) {
  startFocusTimer();
  const selectedVideo = getSelectedVideo();
  if (selectedVideo && !videoMatchesFocus(selectedVideo)) setTimeout(() => showFocusNudge(selectedVideo), 350);
} else if (!sessionStorage.getItem("focus_prompt_seen")) {
  setTimeout(openFocusWelcome, 450);
}
