import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import ProjectShowcase from "../components/ProjectShowcase";
import TestimonialSlider from "../components/TestimonialSlider";
import { services, materialExpertise, brandPartners, contactDetails } from "../data/siteContent";
import useInViewAnimation from "../hooks/useInViewAnimation";

const interiorServiceTitles = [
  "Residential Interiors",
  "Commercial Interiors",
  "Renovation & Remodeling",
  "Home Automation",
];

const interiorServices = services.filter((service) =>
  interiorServiceTitles.includes(service.title),
);

const interiorProcess = [
  {
    title: "Consultation & Mood Boarding",
    copy: "We understand your lifestyle, brand, and vastu preferences before translating them into concepts, layouts, and curated mood boards.",
  },
  {
    title: "Design Detailing & 3D Visualization",
    copy: "High-fidelity renders, material palettes, and lighting plans are crafted so you can visualize every space before execution.",
  },
  {
    title: "Production & Site Execution",
    copy: "Modular manufacturing, on-site fabrication, and expert finishing teams deliver premium craftsmanship with milestone-based updates.",
  },
  {
    title: "Styling & Handover",
    copy: "Furniture, soft furnishings, decor, and smart automation are layered in, followed by detailed snag checks prior to handover.",
  },
];

const interiorHighlights = [
  "Modular kitchens with premium hardware and quartz countertops",
  "Bespoke wardrobes, soft furnishings, and lighting design",
  "Turnkey execution for bedrooms, living spaces, and puja rooms",
  "Smart home automation covering lighting, climate, and security",
];

const backgroundImage = "/images/interior-hero-background.avif";

const Interior = () => {
  useInViewAnimation();

  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={backgroundImage}
          alt="Interior ambient background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/82" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22)_0%,_rgba(10,32,51,0.85)_70%)]" />
      </div>

      <div className="relative space-y-24 pb-24">
        <PageHero
          title="Interior Design & Styling"
          description="Turnkey interior solutions for residential and commercial environments with world-class design, modular production, and on-site craftsmanship."
          background={backgroundImage}
        />

      <section className="fade-up mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand/10 bg-white/95 px-6 py-12 shadow-[0_28px_70px_rgba(10,32,51,0.2)] md:px-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(10,32,51,0.06)_0%,_transparent_70%)]" />
            <div className="absolute -left-16 top-8 h-52 w-52 rounded-full bg-brand/10 blur-3xl" />
            <div className="absolute -right-16 bottom-4 h-56 w-56 rounded-full bg-brand-accent/15 blur-3xl" />
          </div>

          <div className="relative space-y-8">
            <SectionHeading
              eyebrow="Interior Expertise"
              title="Spaces that balance aesthetics, functionality, and longevity."
              description="From high-impact living rooms and bedrooms to experience-driven offices and retail fit-outs, our interior team manages design, production, and execution under one roof."
              align="left"
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {interiorServices.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="group relative flex h-full flex-col justify-between rounded-3xl border border-brand/10 bg-white p-6 shadow-[0_18px_40px_rgba(10,32,51,0.12)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_26px_55px_rgba(10,32,51,0.18)]"
                  >
                    <div className="space-y-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand/15 bg-brand/5 text-brand shadow-[0_12px_25px_rgba(10,32,51,0.18)]">
                        {Icon && <Icon className="text-xl" />}
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-brand">{service.title}</h3>
                        <p className="text-sm text-brand/70">{service.description}</p>
                      </div>
                      {service.highlights && (
                        <ul className="space-y-2 text-xs text-brand/65">
                          {service.highlights.slice(0, 3).map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-1 inline-flex h-1 w-5 rounded-full bg-brand-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand/55">
                      <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1">
                        Turnkey
                      </span>
                      <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1">
                        CX Pods
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="fade-up bg-brand/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 md:flex-row md:px-8">
          <div className="flex-1 space-y-6">
            <SectionHeading
              eyebrow="Our Process"
              title="A streamlined workflow from concept to styling."
              align="left"
            />
            <div className="space-y-6">
              {interiorProcess.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-brand/10 bg-white p-6 shadow-[0_20px_45px_rgba(16,26,43,0.08)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-accent">
                    Step 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-brand">{step.title}</h3>
                  <p className="mt-3 text-sm text-brand/70">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <SectionHeading
              eyebrow="What Sets Us Apart"
              title="Comprehensive, detail-led interior execution."
              align="left"
              tone="dark"
            />
            <div className="rounded-3xl border border-white/12 bg-white/10 p-6 text-white shadow-[0_24px_55px_rgba(10,32,51,0.35)] backdrop-blur">
              <ul className="space-y-3 text-sm text-white/80">
                {interiorHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-6 rounded-full bg-brand-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/12 bg-white/10 p-6 text-white shadow-[0_24px_55px_rgba(10,32,51,0.35)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                Material & Craft
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">Specialized workmanship</h3>
              <div className="space-y-4">
                {materialExpertise.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_12px_25px_rgba(10,32,51,0.35)]">
                        <Icon className="text-xl" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-white/70">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fade-up mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-white/65">
              Signature Interiors
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
              Immersive spaces designed for delight.
            </h2>
            <p className="max-w-3xl text-sm text-white/70 md:text-base">
              Tour a selection of residential and commercial interiors executed by our in-house teams across Delhi NCR and beyond.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">
              Residential
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">
              Commercial
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">
              Retail
            </span>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/12 bg-white/5 p-4 shadow-[0_18px_45px_rgba(10,32,51,0.35)] backdrop-blur">
          <ProjectShowcase />
        </div>
      </section>

      <section className="fade-up bg-brand/5 py-20 text-white">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Partner Ecosystem"
            title="Branded material partners for quality assurance."
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
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 md:px-8 text-white">
        <SectionHeading
          eyebrow="Testimonials"
          title="Voices from our clients and partners."
          description="Long-term relationships built on design sensitivity, execution discipline, and transparent communication."
          tone="dark"
        />
        <TestimonialSlider />
      </section>

      <section className="fade-up relative overflow-hidden bg-brand text-white">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(209,160,79,0.3)_0%,_transparent_70%)]"
          aria-hidden
        />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent">
            Ready To Transform Your Space?
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
            Book an interior design workshop with the Karthikeya team.
          </h2>
          <p className="max-w-2xl text-base text-white/70">
            Share your project brief and we’ll schedule a walkthrough, concept presentation, and
            detailed estimate tailored to your goals.
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

export default Interior;

