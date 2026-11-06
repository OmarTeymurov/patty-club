import Image from "next/image";
import { ArrowUpRightIcon, PinIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="grid min-h-[560px] md:grid-cols-2">
      <div className="flex flex-col justify-center bg-club-red px-6 py-14 text-white md:px-12">
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-club-yellow">
          Smashed fresh. Served with good vibes.
        </p>
        <h1 className="font-display text-6xl uppercase leading-[0.95] md:text-8xl">
          Big bites.
          <br />
          Good times.
        </h1>
        <p className="mt-8 max-w-sm text-sm leading-relaxed">
          Crispy edges. Melty cheese. Your new usual.
          <br />
          Pull up for proper burgers and even better company.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#menu"
            className="flex items-center gap-3 rounded-md bg-club-yellow px-5 py-3 text-xs font-medium text-club-ink"
          >
            Explore the menu
            <ArrowUpRightIcon />
          </a>
          <a
            href="#find-us"
            className="flex items-center gap-3 rounded-md bg-white px-5 py-3 text-xs font-medium text-club-ink"
          >
            Find your way here
            <PinIcon />
          </a>
        </div>
        <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.1em]">
          Dine in / Take away / Everyone&apos;s welcome
        </p>
      </div>

      <div className="relative min-h-[420px] bg-amber-400">
        <Image
          src="/images/hero.jpg"
          alt="The Club Classic double smash burger with fries"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute left-8 top-8 flex h-28 w-28 -rotate-12 flex-col items-center justify-center rounded-full bg-white text-center">
          <span className="text-[8px] font-semibold uppercase tracking-wider text-club-red">
            Meet your new
          </span>
          <span className="font-display text-2xl uppercase leading-none text-club-red">
            Favorite
          </span>
          <span className="text-[8px] font-semibold uppercase tracking-wider text-club-red">
            The Club Classic
          </span>
        </div>
        <div className="absolute bottom-0 left-0 flex items-center gap-6 bg-club-red px-5 py-3 text-[10px] font-bold uppercase text-white">
          <span>The Club Classic</span>
          <span className="text-club-yellow">$10.50</span>
        </div>
      </div>
    </section>
  );
}
