import { DATA } from "@/data/resume";

export default function BuildsSection() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-muted-foreground">
        I build AI systems that…
      </p>
      <div className="grid gap-2">
        {DATA.builds.map((item) => (
          <div
            key={item.title}
            className="border border-border rounded-xl px-4 py-3"
          >
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
