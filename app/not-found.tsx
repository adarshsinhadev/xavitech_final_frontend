import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import StaticSky from "@/components/effects/StaticSky";

export default function NotFound() {
  return (
    <>
      <StaticSky />
      <Navbar />
      <main className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-circuit/80">
          Signal lost // 404
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold text-ink sm:text-7xl">
          Off the map
        </h1>
        <p className="mt-4 max-w-md text-muted">
          This page drifted out of range. It may have moved, or never existed on this course.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center rounded-full border border-circuit/40 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-circuit transition-colors hover:border-circuit hover:bg-circuit/10"
        >
          Return to launch
        </Link>
      </main>
    </>
  );
}
