/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { DATA } from "@/data/resume";

type WorkItem = (typeof DATA.work)[number];

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection({
  items = DATA.work,
}: {
  items?: readonly WorkItem[];
}) {
  return (
    <div className="grid gap-8">
      {items.map((work) => (
        <article key={work.company} className="grid gap-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-x-3 min-w-0">
              <LogoImage src={work.logoUrl} alt={work.company} />
              <div className="min-w-0">
                <h3 className="font-semibold leading-none">{work.company}</h3>
                <p className="font-sans text-sm text-muted-foreground mt-1">
                  {work.title}
                  {work.location ? ` · ${work.location}` : ""}
                </p>
              </div>
            </div>
            <p className="text-xs tabular-nums text-muted-foreground text-right shrink-0">
              {work.start} – {work.end}
            </p>
          </div>
          <div className="ml-11 md:ml-13 flex flex-col gap-2 text-sm text-muted-foreground">
            <p className="text-pretty leading-relaxed">{work.description}</p>
            <ul className="list-disc space-y-1.5 pl-4">
              {work.points.map((point) => (
                <li key={point} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
