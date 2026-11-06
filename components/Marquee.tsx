import { marqueeItems } from "@/lib/content";
import { SparkIcon } from "./Icons";

export default function Marquee() {
  return (
    <div className="flex items-center justify-between gap-6 overflow-hidden bg-club-yellow px-6 py-4 md:px-12">
      {marqueeItems.map((item, i) => (
        <div key={item} className="flex items-center gap-6">
          <span className="whitespace-nowrap font-display text-lg uppercase md:text-xl">
            {item}
          </span>
          {i < marqueeItems.length - 1 && (
            <SparkIcon className="h-4 w-4 shrink-0 text-club-red" />
          )}
        </div>
      ))}
    </div>
  );
}
