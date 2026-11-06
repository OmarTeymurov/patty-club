import { location, site } from "@/lib/content";
import { PinIcon } from "./Icons";

export default function Location() {
  return (
    <section id="find-us" className="bg-club-cream px-6 py-14 md:px-8">
      <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[minmax(0,420px)_1fr]">
        <div>
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-club-red">
            {location.eyebrow}
          </p>
          <h2 className="font-display text-5xl uppercase leading-[0.95] md:text-6xl">
            {location.title[0]}
            <br />
            {location.title[1]}
          </h2>
          <p className="mt-5 text-sm font-semibold">{site.address}</p>
          <p className="mt-1 text-[11px] text-neutral-500">{location.tagline}</p>

          <div className="mt-5 border-t border-neutral-200 pt-4">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-club-red">
              {location.hoursLabel}
            </p>
            <dl className="divide-y divide-neutral-200 text-xs">
              {location.hours.map((h) => (
                <div key={h.days} className="flex justify-between py-2">
                  <dt>{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <a
            href={site.mapsHref}
            className="mt-5 inline-flex items-center gap-3 rounded-md bg-club-red px-5 py-3 text-xs font-medium text-white"
          >
            Open in Google Maps
            <PinIcon />
          </a>
        </div>

        <div
          className="relative min-h-[320px] overflow-hidden bg-stone-200"
          role="img"
          aria-label={`Map preview of ${site.address}`}
        >
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <div className="rounded-md bg-white px-4 py-3 shadow">
              <p className="font-display text-lg uppercase text-club-red">Patty Club</p>
              <p className="text-[9px] text-neutral-500">{site.address} · You&apos;re here.</p>
            </div>
            <span className="mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-club-red text-white">
              <PinIcon />
            </span>
          </div>
          <p className="absolute bottom-2 right-3 text-[8px] text-neutral-500">
            {location.mapNote}
          </p>
        </div>
      </div>
    </section>
  );
}
