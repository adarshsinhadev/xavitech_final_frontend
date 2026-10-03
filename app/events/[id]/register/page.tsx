import { notFound } from "next/navigation";
import { EVENTS, getEventByIdOrSlug } from "@/lib/eventsData";
import StubPage from "@/components/ui/StubPage";

interface RegisterPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  const ids: { id: string }[] = [];
  EVENTS.forEach((event) => {
    ids.push({ id: event.id });
    if (event.aliases) {
      event.aliases.forEach((alias) => ids.push({ id: alias }));
    }
  });
  return ids;
}

export function generateMetadata({ params }: RegisterPageProps) {
  const event = getEventByIdOrSlug(params.id);
  if (!event) return { title: "Registration — XAVITECH 2026" };

  return {
    title: `Register for ${event.name} — XAVITECH 2026`,
    description: `Official registration for ${event.fullTitle} at Xavier University Patna.`,
  };
}

export default function RegisterPage({ params }: RegisterPageProps) {
  const event = getEventByIdOrSlug(params.id);

  if (!event) {
    notFound();
  }

  return (
    <StubPage eyebrowN="00" title={`Register for ${event.name}`}>
      <p>
        Online registration for <strong>{event.fullTitle}</strong> is launching soon!
      </p>
      <p>
        Stay tuned for updates. In the meantime, check out the event details, rules, and team requirements on the{" "}
        <a href={`/events/${event.id}`} className="text-circuit hover:text-marigold underline">
          {event.name} details page
        </a>.
      </p>
    </StubPage>
  );
}
