import Image from "next/image";
import { about } from "@/lib/content";
import { ArrowUpRightIcon, FlameIcon, HeartIcon, UsersIcon } from "./Icons";

const icons = { flame: FlameIcon, heart: HeartIcon, users: UsersIcon };

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1440px] bg-white px-6 py-14 md:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative aspect-[1.1] overflow-hidden rounded-xl bg-neutral-200">
          <Image
            src={about.image}
            alt="Two friends sharing a meal in a red booth"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-4 left-3 rounded-sm bg-white px-4 py-3 font-display text-lg uppercase text-club-red">
            {about.caption}
          </div>
        </div>

        <div>
          <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.12em] text-club-red">
            {about.eyebrow}
          </p>
          <h2 className="font-display text-5xl uppercase leading-[1] md:text-6xl">
            {about.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="mt-5 max-w-md text-xs leading-relaxed text-neutral-500">
              {p}
            </p>
          ))}
          <a
            href="#find-us"
            className="mt-6 inline-flex items-center gap-3 rounded-md border border-club-ink px-5 py-3 text-xs font-medium"
          >
            Come hang with us
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {about.features.map((f) => {
          const Icon = icons[f.icon];
          return (
            <li key={f.title} className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-club-red">
                <Icon />
              </span>
              <div>
                <h3 className="font-display text-base uppercase">{f.title}</h3>
                <p className="mt-1 text-[10px] text-neutral-500">{f.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
