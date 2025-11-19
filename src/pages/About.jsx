import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import StatsStrip from "../components/StatsStrip";
import { ethos } from "../data/siteContent";
import useInViewAnimation from "../hooks/useInViewAnimation";

const values = [
  {
    title: "Integrity & Transparency",
    copy: "Milestone-based billing, shared Gantt charts, and a dedicated client portal keep every stakeholder informed.",
  },
  {
    title: "Innovation in Delivery",
    copy: "We tap into emerging materials, modular systems, and automation tools to compress project timelines.",
  },
  {
    title: "Safety First",
    copy: "Site safety audits, PPE protocols, and vendor onboarding ensure best-in-class EHS standards.",
  },
  {
    title: "Sustainable Choices",
    copy: "Low-VOC paints, FSC-certified timber, and energy-efficient lighting packages aligned with green goals.",
  },
];

const About = () => {
  useInViewAnimation();

  return (
    <div className="min-h-screen bg-white text-brand">
      <SEO
        title="About Us"
        description="Learn about Karthikeya Constructions—our values, multidisciplinary teams, and mission to deliver landmark spaces."
        keywords={["about", "construction company", "values", "team", "mission"]}
        image="/images/hero-whatsapp.jpg"
      />
      <div className="space-y-24 pb-24">
      <PageHero
        title="About Karthikeya Constructions"
        description="From bespoke residences to large-scale commercial hubs, we engineer spaces that speak to ambition and practicality."
        background="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="fade-up mx-auto w-full max-w-6xl px-6 py-12 text-brand md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.38em] text-brand/70">
                Our Story
              </p>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                A multidisciplinary studio rooted in design excellence and engineering precision.
              </h2>
              <p className="text-sm text-brand/70 md:text-base">
                Established in 2010, Karthikeya Constructions has evolved from a boutique interior firm into a
                full-fledged design-and-build powerhouse. Architects, 3D visualisers, civil experts, and craftspeople
                collaborate in agile pods—aligning strategy, craft, and CX dashboards from the first sprint.
              </p>
              <p className="text-sm text-brand/70 md:text-base">
                With in-house execution teams and a vetted partner network, we manage complex programmes across cities
                while retaining the detail-obsessed spirit of a design studio. Every engagement is orchestrated with
                governed rituals, transparent reports, and measurable outcomes.
              </p>
            </div>

            <div className="rounded-3xl bg-[#f8fafc] p-6 text-sm leading-relaxed text-brand/75">
              <strong className="block text-base font-semibold text-brand">Our Mission</strong>
              To craft enduring environments that elevate human experiences, align with business vision, and celebrate the craft of construction.
            </div>

            <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand/60">
              {["Design Pods", "CX Dashboards", "Governed Delivery", "Pan-India Execution"].map((token) => (
                <span key={token} className="rounded-full border border-brand/20 bg-brand/5 px-4 py-2">
                  {token}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] shadow-[0_30px_70px_rgba(15,23,42,0.15)]">
            <img
              src="/images/adobe-stock-406163205.jpeg"
              alt="Professional construction project"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <StatsStrip />

      {/* Gallery */}
      <section className="fade-up mx-auto mt-16 w-full max-w-6xl rounded-3xl bg-white px-6 py-12 text-brand md:px-12">
        <SectionHeading
          eyebrow="Our Gallery"
          title="The works we are proud of."
          description="Interiors, corporate hubs, retail showcases, and hospitality lounges captured from our recent delivery slate."
          align="left"
          tone="light"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Luxury Living Area",
              image: "/images/gallery-copy3.jpg",
            },
            {
              title: "Corporate Collaboration Hub",
              image: "/images/gallery-copy2.jpg",
            },
            {
              title: "Signature Villa Frontage",
              image: "/images/gallery-copy1.jpg",
            },
            {
              title: "Contemporary Workspace",
              image: "/images/gallery-whatsapp-1.jpg",
            },
            {
              title: "Showroom Experience",
              image: "/images/gallery-whatsapp-2.jpg",
            },
            {
              title: "Hospitality Lounge",
              image: "/images/gallery-whatsapp-3.jpg",
            },
            {
              title: "Construction Project 1",
              image: "/images/construction1.webp",
            },
            {
              title: "Construction Project 2",
              image: "/images/construction2.webp",
            },
            {
              title: "Construction Project 3",
              image: "/images/construction3.webp",
            },
          ].map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-3xl">
              <img src={item.image} alt={item.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      <section className="fade-up mx-auto w-full max-w-6xl rounded-3xl bg-white px-6 py-12 text-brand md:px-10">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Core Values"
            title="Principles that shape every decision, interaction, and deliverable."
            tone="light"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl bg-[#f8fafc] p-6 text-brand transition duration-500 hover:-translate-y-2"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/5 blur-2xl transition duration-500 group-hover:bg-brand/10" />
                <div className="relative space-y-4">
                  <h4 className="text-lg font-semibold text-brand">{item.title}</h4>
                  <p className="text-sm text-brand/70">{item.copy}</p>
                  <div className="flex gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand/60">
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-3 py-1">
                      UX-Aligned
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-3 py-1">
                      Turnkey
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fade-up mx-auto w-full max-w-6xl rounded-3xl bg-white px-6 py-12 text-brand md:px-10">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Client Promise"
            title="A partnership anchored in clarity and accountability."
            description="From day-one kickoff to post-handover support, our approach ensures a seamless experience for clients, consultants, and vendors alike."
            tone="light"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {ethos.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl bg-[#f8fafc] p-6 text-brand transition duration-500 hover:-translate-y-2"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand/5 blur-2xl transition duration-500 group-hover:bg-brand/10" />
                <div className="relative">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand/15 bg-white text-sm font-semibold text-brand">
                    0{index + 1}
                  </span>
                  <h4 className="mt-4 text-lg font-semibold text-brand">{item.title}</h4>
                  <p className="mt-3 text-sm text-brand/70">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default About;

