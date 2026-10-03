import type { Metadata } from "next";
import StubPage from "@/components/ui/StubPage";

export const metadata: Metadata = { title: "Registration" };

export default function RegistrationPage() {
  return (
    <StubPage eyebrowN="00" title="Registration">
      <p>
        Registration for XAVITECH 2026 isn't open yet. When it is, it'll
        happen right here — one form, then a per-event sign-up for whatever
        you're entering.
      </p>
      <p>
        In the meantime, the <a href="/#tracks" className="text-circuit hover:text-marigold">Tracks</a> and{" "}
        <a href="/#events" className="text-circuit hover:text-marigold">Events</a> pages
        have team sizes and formats for everything on offer, so you can plan a team ahead of time.
      </p>
    </StubPage>
  );
}
