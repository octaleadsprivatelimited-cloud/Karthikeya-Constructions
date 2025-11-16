import { stats } from "../data/siteContent";

const StatsStrip = () => (
  <section className="relative z-10 mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-white/15 bg-[linear-gradient(135deg,rgba(12,24,46,0.95),rgba(6,12,24,0.95))] px-5 py-12 text-white shadow-[0_45px_120px_rgba(2,6,18,0.6)] backdrop-blur-xl md:px-10">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.16)_0%,_transparent_70%)]" />
      <div className="absolute -left-14 top-0 h-64 w-64 rounded-full bg-[#5f8cff]/35 blur-3xl" />
      <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-brand-accent/45 blur-3xl" />
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0))" }} />
    </div>

    <div className="relative grid gap-6 md:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="group rounded-3xl border border-white/15 bg-[linear-gradient(145deg,rgba(7,15,32,0.85),rgba(2,5,15,0.92))] p-6 text-center shadow-[0_28px_70px_rgba(3,6,14,0.55)] transition duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-[linear-gradient(145deg,rgba(11,22,46,0.9),rgba(3,8,20,0.95))] md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start">
            <span className="h-px flex-1 bg-[linear-gradient(to_right,rgba(255,255,255,0),rgba(255,255,255,0.6),rgba(255,255,255,0))]" />
            <span className="mx-3 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80">
              {item.label.split(" ")[0]}
            </span>
            <span className="h-px flex-1 bg-[linear-gradient(to_right,rgba(255,255,255,0.6),rgba(255,255,255,0))]" />
          </div>
          <p className="mt-6 text-4xl font-semibold text-brand-accent md:text-5xl">{item.value}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/70">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsStrip;

