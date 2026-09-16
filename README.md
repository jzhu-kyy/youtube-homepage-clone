# YouTube Clone — full stack

A polished YouTube-inspired homepage, watch experience, and persistent user library built for the ProductSC developer challenge.

**Live demo:** [judy-youtube-clone.netlify.app](https://judy-youtube-clone.netlify.app)

## Challenge coverage

- Recognizable responsive YouTube-style homepage with sidebar navigation, category chips, video cards, search, and account controls.
- Complete core flow: browse videos → open a video → watch page → embedded playback state.
- Interactive data view: live text search, category filtering, and sorting by recommendation, views, or recency.
- Additional interactions: sidebar collapse, theme switcher, subscribe/like/save/share controls, comments, related-video navigation, and responsive mobile navigation.
- Real serverless backend using Netlify Functions and Netlify Blobs.
- Account registration, secure salted password hashing, login sessions, and sign out.
- Persistent saved videos and watch history, synced per account.
- FocusTube learning mode with a topic-shaped feed, live study timer, Shorts and entertainment filtering, off-topic nudges, and persistent session summaries.
- Loading skeletons, signed-out and empty states, retry states, offline feedback, and image fallbacks.
- Mobile layouts for the feed, watch page, library, navigation drawer, and authentication flow.

## Run locally

Install dependencies and start the full Netlify development environment:

```bash
npm install
npm run dev
```

The first dev run downloads the current Netlify CLI with `npx`; it then prints the local URL (normally [http://localhost:8888](http://localhost:8888)). Authentication and storage require the Netlify development environment rather than a plain static file server.

## Deploy

Import this repository in Netlify. The checked-in `netlify.toml` configures the static site, serverless functions, `/api/*` routes, and security headers automatically. Netlify Blobs is provisioned when the site is deployed—no database keys are required.

## Security notes

- Passwords are never stored as plain text; the backend hashes them with Node's `scrypt` and a unique random salt.
- Session tokens are random, stored server-side as hashes, expire after 30 days, and are sent over authenticated API requests.
- The app intentionally uses email/password demo authentication rather than third-party OAuth so the complete flow can be evaluated without extra provider configuration.

## Notes

The interface and feed metadata are original mock content created for an internal skills assessment. Video thumbnails and playback use public YouTube endpoints and remain the property of their respective owners. This project is not affiliated with YouTube or Google.
