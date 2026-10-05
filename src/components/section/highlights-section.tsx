import { DATA } from "@/data/resume";

export default function HighlightsSection() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {DATA.highlights.map((item, index) => (
        <div
          key={item.label}
          className={`border border-border rounded-xl px-3 py-3 sm:px-4${
            index === DATA.highlights.length - 1 ? " col-span-2" : ""
          }`}
        >
          <p className="font-semibold tracking-tight text-sm sm:text-base">
            {item.value}
          </p>
          <p className="text-xs text-muted-foreground mt-1 leading-snug">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
