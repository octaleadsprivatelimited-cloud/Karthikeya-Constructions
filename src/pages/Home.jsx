import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import StatsStrip from "../components/StatsStrip";
import TestimonialSlider from "../components/TestimonialSlider";
import useInViewAnimation from "../hooks/useInViewAnimation";

const heroBackgroundImage = "/images/hero-whatsapp.jpg";

const heroHighlights = [
  "Residential turnkey builds",
  "Commercial & corporate hubs",
  "High-rise & luxury villas",
  "Smart renovation pods",
];

const heroStats = [
  { value: "650+", label: "Projects Delivered" },
  { value: "12+", label: "Years Of Excellence" },
  { value: "50+", label: "In-House Experts" },
  { value: "30+", label: "Cities Served" },
];

const aboutHighlights = [
  {
    title: "Human-Centred Strategy",
    description: "Insight workshops translate your brand, lifestyle, and compliance cues into a live brief.",
  },
  {
    title: "Detail-Driven Execution",
    description: "Dedicated pods for civil, MEP, automation, and styling keep every sprint accountable.",
  },
  {
    title: "Transparent Governance",
    description: "Weekly dashboards, quantified QA, and milestone sign-offs ensure total clarity.",
  },
];

const serviceTiles = [
  {
    icon: "🏗️",
    title: "Residential Turnkey",
    description: "Apartments, villas, and townships with bespoke interiors, smart automation, and vastu-aligned layouts.",
    points: ["Concept-to-handover", "Material curation", "White-glove styling"],
  },
  {
    icon: "🏢",
    title: "Commercial & Corporate",
    description: "Hybrid workspaces and HQs engineered for productivity with branded storytelling and tech integration.",
    points: ["Agile pods", "Acoustics & AV", "Change management"],
  },
  {
    icon: "🏥",
    title: "Hospitality & Wellness",
    description: "Boutique hotels, clubs, and wellness centres balancing luxury finishes with operational rigour.",
    points: ["Guest experience labs", "Lighting strategy", "Rapid refurb cycles"],
  },
  {
    icon: "🛠️",
    title: "Renovation & Retrofits",
    description: "Structural optimisation, façade upgrades, and adaptive reuse for legacy assets.",
    points: ["Engineering audits", "Permitting support", "On-going maintenance"],
  },
  {
    icon: "🌐",
    title: "Design Management",
    description: "Architectural, interior, and MEP design stewardship with BIM coordination.",
    points: ["Multi-disciplinary team", "Vendor alignment", "Digital twins"],
  },
  {
    icon: "📊",
    title: "Project Governance",
    description: "Owner’s representation, cost control, and schedule assurance for investor confidence.",
    points: ["Risk registers", "Value engineering", "Post-occupancy review"],
  },
];

const projectShowcase = [
  {
    title: "Skyline Grand Residences",
    segment: "Residential",
    location: "Hyderabad",
    timeline: "16 Weeks",
    outcome: "Delivered 12,000 sq ft duplex with custom veneers, Italian stone, and smart automation.",
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Innovation HQ",
    segment: "Commercial",
    location: "Bengaluru",
    timeline: "14 Weeks",
    outcome: "50,000 sq ft hybrid office with biophilic pods, acoustic strategy, and branded experience spine.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Aurora Wellness Retreat",
    segment: "Hospitality",
    location: "Goa",
    timeline: "18 Weeks",
    outcome: "Immersive spa suites, sculpted courtyards, and energy-efficient climate mesh.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Legacy Tower Retrofit",
    segment: "Renovation",
    location: "Chennai",
    timeline: "10 Weeks",
    outcome: "Façade refresh, structural optimisation, and premium lobby with metallic accents.",
    image: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=1200&q=80",
  },
];

const credibilityBadges = [
  "Trusted by 120+ developers",
  "Dedicated safety officers",
  "Material labs & mock-up studio",
  "24/7 site monitoring",
];

const callToAction = {
  headline: "Ready to build your next landmark?",
  subtext:
    "Book a free consultation to discuss timelines, budgets, and experience goals with our core team.",
};

const Home = () => {
  useInViewAnimation();

  return (
    <main className="bg-[#f4f6fb] text-brand">
      <SEO
        title="Home"
        description="Premium residential and commercial construction, interiors, renovation, and governance—delivered with precision across India."
        keywords={[
          "construction",
          "residential construction",
          "commercial construction",
          "turnkey",
          "interiors",
          "renovation",
          "Hyderabad",
          "Bengaluru",
          "India",
        ]}
        image="/images/hero-whatsapp.jpg"
      />
      {/* Hero */}
      <section className="fade-up relative isolate overflow-hidden border-b border-white/10 bg-[#030b1a] text-white shadow-[0_25px_90px_rgba(5,12,34,0.35)]">
          <img
            src={heroBackgroundImage}
          alt="Workers on premium high-rise construction site"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/2 via-black/25 to-[#030b1a]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,196,113,0.12),transparent_65%)]" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-28 md:flex-row md:items-center md:px-10">
          <div className="max-w-2xl space-y-6">
            <p className="inline-flex rounded-full border border-white/40 bg-black/30 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.45em] text-white drop-shadow-[0_4px_12px_rgba(3,3,3,0.6)]">
              Premium construction studio
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-white drop-shadow-[0_10px_28px_rgba(2,6,18,0.85)] md:text-5xl lg:text-6xl">
                Building dreams, one project at a time.
              </h1>
              <p className="text-base text-white drop-shadow-[0_8px_18px_rgba(3,6,16,0.75)] md:text-lg">
                From landmark residences to corporate HQs, Karthikeya Constructions blends modern design, engineered precision, and transparent governance to deliver spaces that inspire trust.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-gradient-to-r from-[#f8c471] via-[#f39c12] to-[#d35400] px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#1b1205] shadow-[0_25px_65px_rgba(243,156,18,0.45)] transition hover:brightness-110"
              >
                Get A Free Consultation
              </Link>
              <Link
                to="/projects"
                className="rounded-full border border-white/60 bg-black/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white drop-shadow-[0_6px_16px_rgba(2,4,10,0.65)] transition hover:bg-white/20"
              >
                See Our Projects
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/25 bg-black/30 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-white drop-shadow-[0_4px_12px_rgba(2,4,10,0.6)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid flex-1 gap-4 sm:grid-cols-2">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-[0_30px_70px_rgba(4,7,15,0.55)] backdrop-blur"
              >
                <p className="text-3xl font-semibold text-[#f8c471]">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.32em] text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="fade-up mx-auto mt-16 grid w-full max-w-6xl gap-10 rounded-3xl bg-white p-6 shadow-[0_35px_90px_rgba(15,23,42,0.12)] md:grid-cols-[1.1fr,0.9fr] md:p-10">
          <div className="space-y-6">
        <SectionHeading
            eyebrow="About Karthikeya Constructions"
            title="We blend modern design thinking with disciplined site execution."
            description="Our multi-disciplinary studio pairs architects, project managers, and craftsmen under one sprint rhythm so that every milestone—from permit to handover—feels seamless."
          align="left"
            tone="light"
          />

          <div className="grid gap-4 md:grid-cols-3">
            {aboutHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-brand/10 bg-[#f8fafc] p-4">
                <h3 className="text-base font-semibold text-brand">{item.title}</h3>
                <p className="mt-2 text-sm text-brand/70">{item.description}</p>
                </div>
              ))}
            </div>

          <div className="flex flex-wrap gap-3">
            {credibilityBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-brand/10 bg-brand/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand/70">
                {badge}
                </span>
          ))}
        </div>
          </div>

        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
            alt="Engineers discussing drawings"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-4 text-sm text-brand shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand/60">
              Site in focus
            </p>
            <p className="mt-2 font-semibold">Premium high-rise topping off in Hyderabad</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="fade-up mx-auto mt-16 w-full max-w-6xl rounded-3xl bg-gradient-to-br from-[#07132a] via-[#0b1f3f] to-[#07132a] px-6 py-12 text-white shadow-[0_45px_120px_rgba(4,10,30,0.45)] md:px-12">
        <SectionHeading
          eyebrow="Services"
          title="Full-stack construction expertise for residential and commercial clients."
          description="Pick the engagement you need—from turnkey design-build to governance for large capital projects."
          align="left"
          tone="dark"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceTiles.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 shadow-[0_25px_70px_rgba(3,8,20,0.55)] backdrop-blur transition hover:-translate-y-2 hover:border-white/35"
            >
              <div className="flex items-center gap-3 text-2xl">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                  {service.icon}
                </span>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
              <p className="mt-4 text-sm text-white/75">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-white/70">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="inline-block h-1 w-6 rounded-full bg-gradient-to-r from-[#f8c471] to-transparent" />
                    {point}
                      </li>
                    ))}
                  </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="fade-up mt-14">
      <StatsStrip />
      </section>

      {/* Projects */}
      <section className="fade-up mx-auto mt-16 w-full max-w-6xl rounded-3xl bg-white px-6 py-12 shadow-[0_35px_90px_rgba(15,23,42,0.12)] md:px-12">
        <SectionHeading
          eyebrow="Projects"
          title="Built for impact across residential, commercial, and hospitality."
          description="Each case study pairs a strong narrative with measurable outcomes—speed, budget, or experience."
          align="left"
          tone="light"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projectShowcase.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-3xl border border-brand/5 shadow-[0_18px_55px_rgba(15,23,42,0.15)]">
              <div className="relative h-64">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand/70">
                    {project.segment}
                  </span>
                  <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                    {project.timeline}
                  </span>
                </div>
              </div>
              <div className="space-y-4 bg-white p-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-brand">{project.title}</h3>
                  <p className="text-sm text-brand/60">{project.location}</p>
                </div>
                <p className="text-sm text-brand/70">{project.outcome}</p>
                <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  View Case Study <span aria-hidden>→</span>
                      </Link>
              </div>
                </article>
              ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="fade-up mx-auto mt-16 w-full max-w-6xl rounded-3xl bg-[#0b162b] px-6 py-12 text-white shadow-[0_45px_120px_rgba(4,10,30,0.45)] md:px-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Clients trust us with their largest investments."
          description="Hear from homeowners, developers, and global brands that partnered with us for high-stakes delivery."
          align="left"
          tone="dark"
        />
        <TestimonialSlider />
      </section>

      {/* CTA */}
      <section className="fade-up mx-auto my-16 w-full max-w-5xl rounded-3xl bg-gradient-to-r from-[#f8c471] via-[#f39c12] to-[#d35400] px-6 py-12 text-center text-[#1b1205] shadow-[0_40px_110px_rgba(243,156,18,0.35)] md:px-12">
        <h2 className="text-3xl font-semibold md:text-4xl">{callToAction.headline}</h2>
        <p className="mt-4 text-base md:text-lg">{callToAction.subtext}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
            className="rounded-full bg-[#1b1205] px-7 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white"
            >
            Schedule A Call
            </Link>
          <a
            href="tel:+917013794781"
            className="rounded-full border border-[#1b1205] px-7 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#1b1205]"
          >
            +91 70137 94781
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;

