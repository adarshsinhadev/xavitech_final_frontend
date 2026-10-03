# Integration notes (v2)

Base = your responsive project (sections, order, CyberDog untouched).

## One sci-fi language everywhere
- Palette: teal (primary) + marigold (accent). Pink only as a rare alert accent.
- Every section opens with the same mono label: `// 01 ── ABOUT`, `// 02 ── TRACKS` …
- The neon city is now a **planet limb with spaceport spires** (`effects/Horizon.tsx`) – the hero
  and the footer bookend the page on the same horizon.
- Fixed flight-deck HUD (`effects/HudFrame.tsx`): section rail (click to jump), sector / velocity
  readout, corner brackets, scan sweep on every section change.

## Scroll = camera moves (`experience/CameraRig.tsx`)
One camera shot per section (push-in, truck left + bank, settle, truck right + bank, crane up,
pull down), a "kick" (surge + FOV punch) when you cross into a new section, FOV + hyperspace
streaks on fast scrolling. Per-section scenery: station (hero), ringed planet (about),
ring gate (tracks→schedule), debris field you fly through (events).

## Binary
Now sparse, slow, head-lit **data streams** (`effects/DataStreams.tsx`): hugging the hero margins,
and a lighter version inside About. The dense full-screen rain and the 3D digits are gone.

## Interactive, per section
- Hero: click / tap the sky to fire bolts from the two turrets.
- About: scanner reticle with live coordinates; click pings it and cycles the domain.
- Tracks: (yours) – selecting a track now also flashes the 3D ring gate.
- Events: track filter chips reshuffle the carousel. Hover clipping fixed (more top padding).
- Schedule: timeline charges as you scroll; click a slot for its mission clock (T-minus).
- Footer: "Return to launch" – long smooth scroll = warp.

## Edited in your files
Hero, Introduction, Tracks (2 small edits), EventsPreview, Schedule (now client), Backdrops,
Footer (button), Countdown (`EVENT_DATE` exported), page.tsx, globals.css, next.config.mjs, package.json.

Run `npm install` (not `npm ci`) once.


## v3 — Committee / contact page
New route `app/contact/page.tsx`, linked from the navbar ("Committee") and the
footer ("Full committee →"). Uses a calm static starfield instead of the
homepage's animated 3D scene (`components/effects/StaticSky.tsx`) since it's
a long, text-dense page (39 people).

All names/phone/emails are placeholders in `components/sections/contact/data.ts`
— edit that one file, the page just maps over it. Note: the real Events list
(EventsPreview.tsx) has 13 events across the 5 tracks, not 11, so that file
mirrors the 13 to stay consistent — trim it to 11 there if you'd rather match
your original count.

New/edited files: app/contact/page.tsx, components/sections/contact/{data.ts,PersonCard.tsx},
components/effects/StaticSky.tsx, components/layout/Navbar.tsx (+1 link),
components/layout/Footer.tsx (+1 link).


## v4 - feedback pass (draft-6)
Branding: official logo (public/xavitech-logo*.webp) in Hero, Navbar, Footer; favicon/apple-icon from the simplified shield mark; OG image; 404 page; metadata/titles.
Fonts: Rajdhani (headings) + Space Grotesk (UI) + Orbitron (countdown digits, hero "2026" line only).
Info: date 31 OCTOBER 2026 (Countdown, Footer, OG); email xavitech@xup.ac.in (also fixed a hidden mailto: that pointed at a stale address).
Performance tiers (components/experience/shared.ts getQualityTier): low = phones/weak -> no WebGL at all, static sky; medium = tablets/laptops -> reduced counts; high = desktop. Hero canvas pauses off-screen, half the dots + ~30fps on touch.
Mobile: Tracks = swipeable A-E tabs + detail panel; events = swipe row (no auto-marquee) on touch/reduced-motion; filter chips 44px.
0->1 grid (Tracks): rAF-driven (no React state per move); responds to mouse, finger drag, selected track (lights that track's column band), and on touch an ambient + scroll-linked sweep.
Events: a track with exactly one event -> single centred card (scale + fade + up).
Loading: X mark -> pulse -> wordmark -> progress line (~1.8s, once per session, skipped for reduced motion).
Sound: speaker toggle, starts only on tap. NEEDS public/audio/ambient.mp3 (not included).
Pages: /results /registration /announcements /gallery are honest stub pages; nav "Results" and both "Register" buttons no longer dead anchors.
Committee: PersonCard now takes optional image; small initial badge until photos exist.


## v5 - splash, event rotator, sponsors
- Navbar: logo + "Xavier University" link to `/` (scrolls to top if already home). Section links are now `/#tracks` etc. so they also work from /contact.
- Splash (`components/effects/LoadingScreen.tsx`): university logo + XAVITECH logo for 2 s, then canvas pixel-dissolve from bottom-left. Once per tab session (`ONCE_PER_SESSION`, `HOLD_MS`, `DISSOLVE_MS` at the top of the file).
- Event images (About section frame): edit `lib/eventSlides.ts`, images in `public/events/`. Changes every 2 h on the IST clock (12 AM, 2 AM ...). 24 images = 2-day cycle. `ROTATION_START` sets which date starts at image #1.
- Sponsors: `components/sections/Sponsors.tsx`; edit `components/sections/sponsors-data.ts`, logos in `public/sponsors/`.
- Committee: edit `components/sections/contact/data.ts` only.
- Logos: `public/university-logo.webp` (113 KB), `public/xavitech-logo-splash.webp` (111 KB).

## v6 - splash replays on every homepage visit + visual polish
- Splash now replays every time "/" becomes the active route (first load, and again if you leave and come back via the navbar/logo) instead of once per browser session - driven by usePathname(), not sessionStorage.
- Visual refresh: ambient teal/marigold glow + faint grid behind the logos (matches the rest of the site), staggered blur-in entrance for both logos, a drawn-in divider line between them, a small "Xavier University . Patna" caption, and an eased (not linear) pixel dissolve.
- Tunables still at the top of components/effects/LoadingScreen.tsx: HOLD_MS, DISSOLVE_MS.
