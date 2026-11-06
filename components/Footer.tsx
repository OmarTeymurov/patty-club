import { footer, navLinks, site } from "@/lib/content";
import { SparkIcon } from "./Icons";

const footerLinks = navLinks.filter((l) => l.label !== "Find us");

export default function Footer() {
  return (
    <footer className="bg-club-yellow px-6 pt-10 md:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl uppercase text-club-red">{footer.title}</h3>
            <p className="mt-4 text-[11px] leading-relaxed">
              {footer.lines[0]}
              <br />
              {footer.lines[1]}
            </p>
          </div>

          <div className="md:justify-self-center">
            <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.12em] text-club-red">
              Take a look
            </p>
            <ul className="flex gap-4 text-[11px]">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:justify-self-end">
            <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.12em] text-club-red">
              Say hello
            </p>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.instagramHref}>Instagram / {site.instagram} ↗</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between overflow-hidden">
          <p className="font-display text-[22vw] uppercase leading-[0.95] text-club-red md:text-[190px]">
            {site.name}®
          </p>
          <SparkIcon className="hidden h-24 w-24 shrink-0 text-club-red md:block" />
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-club-ink py-4 text-[8px] md:flex-row">
          <p>{footer.copyright}</p>
          <p>{footer.note}</p>
          <a href="#home" className="uppercase">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
