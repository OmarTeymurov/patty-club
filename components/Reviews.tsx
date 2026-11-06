import { reviews } from "@/lib/content";
import { StarRow } from "./Icons";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-club-cream px-6 py-14 md:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-club-red">
              {reviews.eyebrow}
            </p>
            <h2 className="font-display text-5xl uppercase leading-none md:text-6xl">
              Word on the block.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-display text-6xl text-club-red">{reviews.rating}</span>
            <div>
              <StarRow className="text-sm tracking-widest text-club-red" />
              <p className="text-[9px] text-neutral-600">{reviews.ratingNote}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.items.map((r) => (
            <figure key={r.name} className="bg-white p-6">
              <StarRow className="text-sm tracking-widest text-club-red" />
              <blockquote className="mt-4 text-xs leading-relaxed">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-club-yellow text-[9px] font-bold">
                  {r.initials}
                </span>
                <span>
                  <span className="block text-xs font-medium">{r.name}</span>
                  <span className="block text-[9px] text-neutral-500">{r.meta}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-[8px] text-neutral-500">{reviews.disclaimer}</p>
      </div>
    </section>
  );
}
