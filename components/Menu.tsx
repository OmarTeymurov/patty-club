"use client";

import Image from "next/image";
import { useState } from "react";
import { burgers, menuTabs, sidekicks } from "@/lib/content";

export default function Menu() {
  const [active, setActive] = useState(menuTabs[0]);

  return (
    <section id="menu" className="mx-auto max-w-[1440px] bg-white px-6 py-14 md:px-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-club-red">
            The menu / Made for your cravings
          </p>
          <h2 className="font-display text-5xl uppercase leading-none md:text-6xl">
            Pick your happy.
          </h2>
        </div>
        <p className="max-w-[220px] text-xs leading-relaxed text-neutral-500">
          Fresh off the griddle. Big on flavor.
          <br />
          Find your favorite. Then find a new one.
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2" role="tablist">
          {menuTabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
              className={`rounded-full border px-4 py-2 text-[11px] font-medium ${
                active === tab
                  ? "border-club-red bg-club-red text-white"
                  : "border-neutral-200 bg-white text-club-ink"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <p className="hidden text-[9px] text-neutral-500 md:block">
          Ask the crew about allergies &amp; dietary needs.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {burgers.map((b) => (
          <article key={b.name}>
            <div className="relative aspect-[1.55] overflow-hidden rounded-xl bg-amber-100">
              <Image
                src={b.image}
                alt={b.name}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded-sm bg-white px-2 py-1 text-[7px] font-bold uppercase text-club-red">
                {b.badge}
              </span>
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <h3 className="font-display text-xl uppercase">{b.name}</h3>
              <span className="text-sm font-medium text-club-red">{b.price}</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-neutral-500">{b.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 border-t border-neutral-200 pt-6">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-xl uppercase">Better with a sidekick.</h3>
          <p className="text-[9px] text-neutral-500">A little extra goes a long way.</p>
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {sidekicks.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-xs font-semibold">
                <span>{s.name}</span>
                <span className="text-club-red">{s.price}</span>
              </div>
              <p className="mt-1 text-[10px] text-neutral-500">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
