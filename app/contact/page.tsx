import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StaticSky from "@/components/effects/StaticSky";
import Eyebrow from "@/components/ui/Eyebrow";
import PersonCard from "@/components/sections/contact/PersonCard";
import { patron, convenor, overallCoordinators, tracks, webTeam } from "@/components/sections/contact/data";

export const metadata: Metadata = {
  title: "Committee & Contact",
  description: "The people organising XAVITECH 2026 — leadership, coordinators, track and event leads, and the web team.",
};

export default function ContactPage() {
  return (
    <>
      <StaticSky />
      <Navbar />

      <div className="relative z-10">
        <main className="mx-auto max-w-6xl px-5 pb-20 pt-28 sm:px-6 sm:pt-36 lg:pt-40">
          {/* ---------------------------------------------------------- */}
          {/* Header                                                     */}
          {/* ---------------------------------------------------------- */}
          <header className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-circuit/80 sm:text-xs">
              // Contact
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">
              The people behind XAVITECH 2026
            </h1>
            <p className="mt-4 max-w-prose text-muted sm:text-lg">
              Every track and event has a dedicated team on point. Reach out to whoever's
              closest to what you need — general queries can go to the festival
              email in the footer.
            </p>
          </header>

          {/* ---------------------------------------------------------- */}
          {/* 01 — Leadership                                            */}
          {/* ---------------------------------------------------------- */}
          <section className="mt-16 sm:mt-24">
            <Eyebrow n="01">Leadership</Eyebrow>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
              <PersonCard person={patron} role="Patron" accent="marigold" />
              <PersonCard person={convenor} role="Convenor" accent="marigold" />
            </div>
          </section>

          {/* ---------------------------------------------------------- */}
          {/* 02 — Overall coordinators                                  */}
          {/* ---------------------------------------------------------- */}
          <section className="mt-14 sm:mt-20">
            <Eyebrow n="02">Overall Coordinators</Eyebrow>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
              {overallCoordinators.map((person) => (
                <PersonCard key={person.name} person={person} role="Overall Coordinator" accent="circuit" />
              ))}
            </div>
          </section>

          {/* ---------------------------------------------------------- */}
          {/* 03 — Tracks: track leads, then each event's leads          */}
          {/* ---------------------------------------------------------- */}
          <section className="mt-14 sm:mt-20">
            <Eyebrow n="03">Track Leaders &amp; Event Coordinators</Eyebrow>

            <div className="mt-8 space-y-12 sm:mt-10 sm:space-y-16">
              {tracks.map((track, ti) => (
                <div key={track.name} className="relative border-l border-line/70 pl-5 sm:pl-7">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-circuit shadow-[0_0_10px_rgba(53,224,201,0.6)]"
                  />
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-circuit/70">
                    Track {String(ti + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 font-display text-xl font-semibold text-ink sm:text-2xl">
                    {track.name}
                  </h2>

                  {/* track leads */}
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
                    {track.leads.map((person, i) => (
                      <PersonCard key={i} person={person} role="Track Leader" accent="circuit" compact />
                    ))}
                  </div>

                  {/* this track's events — skipped when the track has no event coordinators */}
                  {track.events && track.events.length > 0 && (
                  <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
                    {track.events.map((event) => (
                      <div key={event.name}>
                        <p className="mb-2.5 text-sm font-medium text-ink/90">{event.name}</p>
                        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                          {event.leads.map((person, i) => (
                            <PersonCard key={i} person={person} role="Event Coordinator" compact />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ---------------------------------------------------------- */}
          {/* 04 — Web development team                                  */}
          {/* ---------------------------------------------------------- */}
          <section className="mt-16 sm:mt-24">
            <Eyebrow n="04">Web Development Team</Eyebrow>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-3 sm:gap-5">
              {webTeam.map((person) => (
                <PersonCard key={person.name} person={person} role="Web Team" accent="circuit" />
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
