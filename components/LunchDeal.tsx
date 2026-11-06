import Image from "next/image";
import { lunchDeal, site } from "@/lib/content";
import { PhoneIcon } from "./Icons";

export default function LunchDeal() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="relative min-h-[300px] bg-red-200">
        <Image
          src={lunchDeal.image}
          alt="The Club Classic with skin-on fries and a fountain drink"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center bg-club-yellow px-8 py-12 md:px-14">
        <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.12em]">
          {lunchDeal.hours}
        </p>
        <h2 className="font-display text-5xl uppercase leading-none md:text-6xl">
          {lunchDeal.title[0]}
          <br />
          {lunchDeal.title[1]}
        </h2>
        <p className="mt-5 whitespace-pre-line text-xs leading-relaxed">
          {lunchDeal.description}
        </p>
        <div className="mt-6 flex items-center gap-5">
          <span className="font-display text-4xl text-club-red">{lunchDeal.price}</span>
          <a
            href={site.phoneHref}
            className="flex items-center gap-3 rounded-md bg-club-red px-5 py-3 text-xs font-medium text-white"
          >
            Call to order
            <PhoneIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
