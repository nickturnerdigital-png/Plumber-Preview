import { Clock, Shield, Star, Wrench } from "lucide-react";

const STATS = [
  { value: "1,847+", label: "Jobs Completed", Icon: Wrench },
  { value: "4.9★", label: "Average Rating", Icon: Star },
  { value: "29 min", label: "Avg Response", Icon: Clock },
  { value: "23 yrs", label: "In Business", Icon: Shield },
];

export function LiveStatsBar() {
  return (
    <section className="relative bg-ice py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="group relative flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-2 flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-electric/10 text-electric transition-colors group-hover:bg-electric group-hover:text-white sm:mb-0">
                <s.Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-navy sm:text-4xl">
                  {s.value}
                </div>
                <p className="mt-0.5 text-sm font-semibold text-navy-400">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
