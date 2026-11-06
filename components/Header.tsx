import { navLinks, site } from "@/lib/content";
import { PhoneIcon } from "./Icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-8">
        <a href="#home" className="leading-none">
          <span className="block font-display text-2xl uppercase tracking-wide text-club-red">
            {site.name}®
          </span>
          <span className="block text-[8px] font-bold uppercase tracking-[0.12em] text-club-red">
            {site.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-xs md:flex" aria-label="Main">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={
                i === 0
                  ? "border-b border-club-red pb-1 text-club-red"
                  : "text-club-ink hover:text-club-red"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="flex items-center gap-3 rounded-md bg-club-red px-5 py-3 text-xs font-medium text-white"
        >
          Call the club
          <PhoneIcon />
        </a>
      </div>
    </header>
  );
}
