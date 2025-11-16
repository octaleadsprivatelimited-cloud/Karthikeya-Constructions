import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import StatsStrip from "../components/StatsStrip";
import ProjectShowcase from "../components/ProjectShowcase";
import { services, brandPartners, roadmap, contactDetails } from "../data/siteContent";
import useInViewAnimation from "../hooks/useInViewAnimation";

const constructionServiceTitles = ["Architectural Design", "Residential Construction"];

const constructionServices = services.filter((service) =>
  constructionServiceTitles.includes(service.title),
);

const constructionProcess = [
  {
    title: "Planning & Approvals",
    copy: "Concept design, feasibility, cost estimation, and regulatory approvals handled with structural coordination.",
  },
  {
    title: "Engineering & Procurement",
    copy: "Detailed drawings, BOQs, vendor onboarding, and material logistics managed with transparency.",
  },
  {
    title: "Site Execution & QA",
    copy: "Dedicated project managers supervise civil, MEP, and finishing works with milestone-based quality audits.",
  },
  {
    title: "Handover & Aftercare",
    copy: "Snag rectification, documentation, and maintenance support ensure a seamless handover experience.",
  },
];

const backgroundImage = "/images/construction-hero-background.avif";

const Construction = () => {
  useInViewAnimation();

  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <SEO
        title="Construction"
        description="Design-to-build construction for homes, offices, and hospitality—governed by QA, timelines, and transparent dashboards."
        keywords={["construction", "design-build", "governance", "QA", "residential", "commercial", "hospitality"]}
        image="/images/hero-whatsapp.jpg"
      />
      <div className="absolute inset-0 -z-10">
        <img
          src={backgroundImage}
          alt="Construction ambient background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/82" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22)_0%,_rgba(10,32,51,0.85)_70%)]" />
      </div>

      <div className="relative space-y-24 pb-24">
        <PageHero
          title="Architecture & Construction"
          description="Turnkey villa, bungalow, and commercial builds backed by robust engineering, premium materials, and disciplined project management."
          background={backgroundImage}
        />

      <section className="fade-up mx-auto w-full max-w-6xl px-6 md:px-8 text-brand">
        <div className="relative overflow-hidden rounded-3xl border border-brand/10 bg-white/95 px-6 py-12 shadow-[0_26px_55px_rgba(10,32,51,0.2)] md:px-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(10,32,51,0.08)_0%,_transparent_70%)]" />
            <div className="absolute -left-16 top-8 h-56 w-56 rounded-full bg-brand/12 blur-3xl" />
            <div className="absolute -right-14 bottom-4 h-56 w-56 rounded-full bg-brand-accent/15 blur-3xl" />
          </div>

          <div className="relative space-y-8">
            <SectionHeading
              eyebrow="Construction Expertise"
              title="Structurally sound, design-led, and future-ready builds."
              description="From architectural planning and structural engineering to turnkey execution, Karthikeya Constructions offers a single point of accountability for premium projects."
              align="left"
            />

            <div className="grid gap-6 md:grid-cols-2">
              {constructionServices.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-3xl border border-brand/12 bg-white p-6 shadow-[0_20px_45px_rgba(10,32,51,0.15)] transition duration-500 hover:-translate-y-2 hover:border-brand/20"
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand/5 blur-2xl transition duration-500 group-hover:bg-brand/10" />
                  <div className="relative space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-brand">{service.title}</h3>
                      <p className="text-sm text-brand/70">{service.description}</p>
                    </div>
                    {service.highlights && (
                      <ul className="space-y-2 text-xs text-brand/65">
                        {service.highlights.slice(0, 3).map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 inline-flex h-1 w-5 rounded-full bg-brand" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand/60">
                    <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1">
                      Turnkey
                    </span>
                    <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1">
                      QA Pods
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fade-up bg-brand/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 md:flex-row md:px-8">
          <div className="flex-1 space-y-6">
            <SectionHeading
              eyebrow="Delivery Framework"
              title="Structured stages that keep every build on track."
              align="left"
            />
            <div className="space-y-6">
              {constructionProcess.map((step, index) => (
                <article
                  key={step.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/10 p-6 text-white shadow-[0_24px_55px_rgba(10,32,51,0.35)] backdrop-blur transition duration-500 hover:-translate-y-2 hover:bg-white/15"
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/10 blur-2xl transition duration-500 group-hover:bg-white/20" />
                  <div className="relative space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
                      Phase 0{index + 1}
                    </p>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="text-sm text-white/75">{step.copy}</p>
                  </div>
                  <div className="mt-4 flex gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
                    <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
                      QA Pods
                    </span>
                    <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
                      Transparent Sprints
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <SectionHeading
              eyebrow="Legacy & Growth"
              title="Milestones that shape Karthikeya Constructions."
              align="left"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {roadmap.map((milestone) => (
                <article
                  key={milestone.year}
                  className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/10 p-6 text-white shadow-[0_24px_55px_rgba(10,32,51,0.35)] backdrop-blur transition duration-500 hover:-translate-y-2 hover:bg-white/15"
                >
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-white/10 blur-2xl transition duration-500 group-hover:bg-white/20" />
                  <div className="relative space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
                      {milestone.year}
                    </p>
                    <h4 className="text-sm font-semibold text-white">{milestone.title}</h4>
                    <p className="text-sm text-white/75">{milestone.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fade-up mx-auto w-full max-w-6xl px-6 md:px-8 text-white">
        <SectionHeading
          eyebrow="Why Karthikeya"
          title="Measured performance across every project."
          description="Metrics that underline our commitment to timeline adherence, quality control, and collaborative project delivery."
          tone="dark"
        />
        <StatsStrip />
      </section>

      <section className="fade-up bg-brand/5 py-20">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="space-y-4 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-white/60">
              Recent Construction
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Engineered spaces designed for scale.
            </h2>
            <p className="max-w-3xl text-sm text-white/70 md:text-base">
              Highlights from our residential and commercial portfolio spanning villas, corporate offices, and retail experiences.
            </p>
          </div>
          <div className="mt-8 rounded-3xl border border-white/12 bg-white/5 p-4 shadow-[0_22px_60px_rgba(10,32,51,0.35)] backdrop-blur">
            <ProjectShowcase />
          </div>
        </div>
      </section>

      <section className="fade-up mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-white shadow-[0_28px_70px_rgba(10,32,51,0.45)] backdrop-blur md:px-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)]" />
            <div className="absolute -left-16 top-8 h-52 w-52 rounded-full bg-brand/40 blur-3xl" />
            <div className="absolute -right-14 bottom-4 h-56 w-56 rounded-full bg-brand-accent/35 blur-3xl" />
          </div>

          <div className="relative space-y-8">
            <SectionHeading
              eyebrow="Trusted Partners"
              title="Premium material and technology alliances."
              tone="dark"
            />
            <div className="flex flex-wrap items-center justify-center gap-3">
              {brandPartners.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fade-up relative overflow-hidden bg-brand text-white">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(209,160,79,0.3)_0%,_transparent_70%)]"
          aria-hidden
        />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent">
            Start Your Project
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
            Partner with Karthikeya Constructions for your next architectural or construction mandate.
          </h2>
          <p className="max-w-2xl text-base text-white/70">
            Share your brief and we’ll align a project manager to scope, schedule, and mobilise your
            build.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${contactDetails.email}`}
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand transition hover:bg-brand-accent hover:text-white"
            >
              Mail Our Team
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-brand"
            >
              Book A Consultation
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Construction;

