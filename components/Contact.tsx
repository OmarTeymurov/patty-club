import { contact, site } from "@/lib/content";
import { PhoneIcon } from "./Icons";

export default function Contact() {
  return (
    <section className="bg-club-red px-6 py-12 text-white md:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 md:flex-row md:items-start">
        <div>
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-club-yellow">
            {contact.eyebrow}
          </p>
          <h2 className="font-display text-5xl uppercase leading-none">{contact.title}</h2>
          <p className="mt-4 text-xs">{contact.text}</p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <a href={site.phoneHref} className="font-display text-4xl">
            {site.phone}
          </a>
          <a
            href={site.phoneHref}
            className="flex items-center gap-3 rounded-md bg-club-yellow px-5 py-3 text-xs font-medium text-club-ink"
          >
            Call Patty Club
            <PhoneIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
