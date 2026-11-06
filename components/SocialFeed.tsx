import Image from "next/image";
import { site, social } from "@/lib/content";
import { InstagramIcon } from "./Icons";

export default function SocialFeed() {
  return (
    <section className="mx-auto max-w-[1440px] bg-white px-6 py-14 md:px-8">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-club-red">
            {social.eyebrow}
          </p>
          <h2 className="font-display text-5xl uppercase leading-none md:text-6xl">
            {social.title}
          </h2>
        </div>
        <a
          href={site.instagramHref}
          className="flex items-center gap-3 rounded-md border border-club-ink px-5 py-3 text-xs"
        >
          {site.instagram}
          <InstagramIcon />
        </a>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {social.posts.map((p) => (
          <figure key={p.caption}>
            <div className="relative aspect-[1.4] overflow-hidden rounded-lg bg-neutral-200">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 font-display text-base uppercase">
              {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
