import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import StatsStrip from "../components/StatsStrip";
import TestimonialSlider from "../components/TestimonialSlider";
import { services, materialExpertise, ethos, contactDetails } from "../data/siteContent";
import useInViewAnimation from "../hooks/useInViewAnimation";

const heroHighlights = [
  "Turnkey residential interiors",
  "High-performance workplaces",
  "Architectural planning & execution",
  "Renovation & smart automation",
];

const heroBackgroundImage = "/images/home-background.avif";

const spotlightTiles = [
  {
    title: "Interior Design Studio",
    description:
      "Concepts, mood boards, and immersive 3D visualisations that translate your lifestyle into refined spaces.",
    cta: { label: "Explore Interiors", to: "/interior" },
    category: "Interiors Program",
    markers: [
      "Persona-led briefing lounge",
      "Material library walkthroughs",
      "Immersive 3D journey previews",
    ],
  },
  {
    title: "Architecture & Construction",
    description:
      "Design-to-build expertise with disciplined project governance, transparent commercials, and certified quality.",
    cta: { label: "View Construction", to: "/construction" },
    category: "Build Program",
    markers: [
      "Design-to-site execution pods",
      "Weekly sprint dashboards",
      "Quality and safety playbooks",
    ],
  },
];

const craftHighlights = [
  {
    title: "Prototype Lab",
    description:
      "3D visualisation, rapid mockups, and material sampling live under one collaborative sprint ritual.",
  },
  {
    title: "Precision Fabrication",
    description:
      "Joinery, veneers, and surface engineering mapped to QA scorecards for consistent on-site handovers.",
  },
  {
    title: "Automation Mesh",
    description:
      "Lighting, HVAC, and security ecosystems engineered with UX tokens for intuitive control stories.",
  },
];

const craftTags = ["Rapid mockups", "QA dashboards", "Vendor mesh", "White-glove handover"];

const blueprintHighlights = [
  {
    title: "Discovery Sprints",
    description: "Persona rituals, brand archetypes, and spatial KPIs captured in a single design brief.",
  },
  {
    title: "Co-create Visuals",
    description: "Moodboards, sketch walls, and interactive 3D prototypes to validate direction early.",
  },
  {
    title: "Governed Delivery",
    description: "Weekly site rituals, QA scorecards, and transparent dashboards keep execution aligned.",
  },
  {
    title: "Experience Launch",
    description: "Snag resolution, styling playbooks, and post-handover analytics to measure success.",
  },
];

const projectFilters = ["All", "Residential", "Commercial", "Hospitality"];

const featuredProjectStories = [
  {
    id: "skyline-penthouse",
    title: "Skyline Penthouse, Delhi NCR",
    category: "Residential",
    summary:
      "Duplex residence redesigned with layered lighting, bespoke veneer detailing, and integrated automation across hospitality-grade amenities.",
    details: [
      { label: "Program", value: "Residential Turnkey" },
      { label: "Timeline", value: "16 Weeks" },
    ],
    highlights: [
      "Experience centre walkthrough with VR-enabled storytelling",
      "Material UX boards featuring Italian stone, acoustic panels, smart glass",
      "Orchestrated site sprints: civil, automation, styling handover pods",
    ],
    metrics: [
      { label: "Lead Discipline", value: "Interior Experience Lab" },
      { label: "CX Score", value: "4.9 / 5" },
      { label: "Status", value: "Live & Maintained" },
    ],
    cta: { label: "View Full Case", to: "/interior" },
    cover:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "corporate-innovation-hub",
    title: "Corporate Innovation Hub",
    category: "Commercial",
    summary:
      "Biophilic workspaces, smart meeting pods, and branded storytelling zones for a 50,000 sq ft global HQ.",
    highlights: [
      "Strategic zoning for hybrid teams",
      "Acoustic pods with dynamic lighting",
      "Launch-ready in 12-week fast track",
    ],
    metrics: [
      { label: "Program", value: "Commercial Interiors" },
      { label: "Timeline", value: "12 Weeks" },
    ],
    cta: { label: "View Project", to: "/construction" },
    cover:
      "https://images.unsplash.com/photo-1529429617124-aee411a31775?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "boutique-villa-retreat",
    title: "Boutique Villa Retreat",
    category: "Hospitality",
    summary:
      "Resort-style villa concept with immersive spa suites, sculpted courtyards, and automated climate scenarios.",
    highlights: [
      "Zoned climate storytelling",
      "Curated material palette for wellness narratives",
      "Full styling & handover playbook",
    ],
    metrics: [
      { label: "Program", value: "Luxury Hospitality" },
      { label: "Timeline", value: "18 Weeks" },
    ],
    cta: { label: "View Project", to: "/interior" },
    cover:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "retail-experience-lab",
    title: "Retail Experience Lab",
    category: "Commercial",
    summary:
      "Flagship retail journey with kinetic displays, omnichannel touchpoints, and modular VM storytelling.",
    highlights: [
      "Interactive product discovery walls",
      "Omnichannel integration with QR-led journeys",
      "Modular fixtures for seasonal reconfiguration",
    ],
    metrics: [
      { label: "Program", value: "Retail Strategy" },
      { label: "Timeline", value: "10 Weeks" },
    ],
    cta: { label: "View Project", to: "/construction" },
    cover:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "wellness-townhouse",
    title: "Wellness Townhouse Upgrade",
    category: "Residential",
    summary:
      "Townhouse transformation with wellness-led zoning, biophilic materials, and adaptive lighting stories for multi-generational living.",
    highlights: [
      "Biophilic atrium with adaptive skylight",
      "Smart automation synced to circadian rhythms",
      "Custom wellness suite with acoustic engineering",
    ],
    metrics: [
      { label: "Program", value: "Residential Interiors" },
      { label: "Timeline", value: "14 Weeks" },
    ],
    cta: { label: "View Project", to: "/interior" },
    cover:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb1?auto=format&fit=crop&w=1600&q=80",
  },
];

const Home = () => {
  const featuredServices = services.slice(0, 3);
  const designPillars = [
    {
      title: "Insight Sprint",
      description: "Persona rituals, brand cues, and vastu inputs align the brief before drawings begin.",
    },
    {
      title: "Seamless Delivery",
      description: "Design, engineering, and execution stay in one sprint rhythm with clear milestones.",
    },
  ];

  const capabilityHighlights = [
    "Insight workshops",
    "Material labs",
  ];

  const [selectedProjectFilter, setSelectedProjectFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedProjectFilter === "All") {
      return featuredProjectStories;
    }
    return featuredProjectStories.filter(
      (project) => project.category === selectedProjectFilter
    );
  }, [selectedProjectFilter]);

  const projectsToDisplay = useMemo(() => {
    const source =
      filteredProjects.length > 0 ? filteredProjects : featuredProjectStories;
    return source.slice(0, 6);
  }, [filteredProjects]);

  const heroProject = projectsToDisplay[0];
  const supportingProjects = projectsToDisplay.slice(1, 4);
  const additionalProjects = projectsToDisplay.slice(4);

  useInViewAnimation();

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#050d18]">
      <div className="relative space-y-24 pb-24">
      {/* Hero */}
      <section className="fade-up relative overflow-hidden pt-6 text-white">
        <div className="absolute inset-0">
          <img
            src={heroBackgroundImage}
            alt="Sculpted interior ambience"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black/45 to-black/80" />
        </div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-28 pt-28 md:flex-row md:items-center md:px-8">
          <div className="max-w-xl space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-[0.4em]">
              UI/UX-Led Experience Studio
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Designing immersive environments where architecture, interiors, and brand storytelling
                feel seamless.
              </h1>
              <p className="text-base text-white/75 md:text-lg">
                Karthikeya Constructions blends award-winning designers, engineers, and project
                strategists to execute turnkey homes, commercial hubs, and hospitality destinations
                across India.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/80 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/interior"
                className="rounded-full bg-brand-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand transition hover:bg-white hover:text-brand"
              >
                Start With Design
              </Link>
              <a
                href="tel:+917013794781"
                className="rounded-full border border-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
              >
                Call +91 70137 94781
              </a>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:flex-1">
            {[
              { value: "12+ Years", label: "Design-Led Delivery" },
              { value: "650+ Projects", label: "Turnkey Successes" },
              { value: "50+ Experts", label: "In-House Team" },
              { value: "30+ Cities", label: "Pan-India Presence" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/20"
              >
                <p className="text-3xl font-semibold text-brand-accent">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service highlights */}
      <section className="fade-up relative z-10 mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-5 py-12 text-white shadow-[0_30px_80px_rgba(10,32,51,0.5)] backdrop-blur-lg md:px-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-brand/50 blur-3xl" />
          <div className="absolute -bottom-16 left-16 h-72 w-72 rounded-full bg-brand-accent/40 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25)_0%,_transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
          <div className="space-y-6">
        <SectionHeading
          eyebrow="What We Do"
              title="Design-led construction, engineered like a UI/UX sprint."
              description="Human insight, storytelling, and execution move together—so every square foot feels intentional."
          align="left"
              tone="dark"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {designPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-white/15 bg-white/8 p-5 shadow-[0_18px_45px_rgba(10,32,51,0.32)] transition duration-300 hover:border-white/25 hover:bg-white/12"
                >
                  <h3 className="text-base font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {capabilityHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70"
                >
                  {item}
                </span>
          ))}
        </div>

          <Link
            to="/construction"
              className="inline-flex w-max items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-brand"
          >
              View Capabilities
          </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} variant="frosted" showHighlights={false} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight */}
      <section className="fade-up relative z-10 mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-5 py-12 text-white shadow-[0_30px_90px_rgba(10,32,51,0.45)] backdrop-blur-lg md:px-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.14)_0%,_transparent_65%)]" />
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-brand/45 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-brand-accent/40 blur-3xl" />
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(135deg,rgba(255,255,255,0.06) 0%,rgba(255,255,255,0) 40%)" }} />
        </div>

        <div className="relative mb-10 flex flex-col gap-3">
          <span className="w-max rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
            Signature Offerings
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Two flagship programs where architecture, interiors, and construction feel choreographed.
          </h2>
          <p className="max-w-2xl text-sm text-white/70 md:text-base">
            Each path is engineered like a product experience—from briefing rituals and design frameworks to execution pods and post-handover success metrics.
          </p>
        </div>

        <div className="relative grid gap-8 lg:grid-cols-2">
          {spotlightTiles.map((tile) => (
            <article
              key={tile.title}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/8 p-1 shadow-[0_25px_60px_rgba(10,32,51,0.35)] transition duration-500 hover:border-white/25 hover:bg-white/12"
            >
              <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/40 p-8 md:flex-row md:items-center md:justify-between md:gap-10">
                <div className="space-y-4 md:max-w-sm">
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
                    {tile.category || "Experience Track"}
                </span>
                  <h3 className="text-2xl font-semibold text-white">{tile.title}</h3>
                  <p className="text-sm text-white/75">{tile.description}</p>
                </div>

                <div className="flex-1 space-y-3">
                  <ul className="space-y-2 text-sm text-white/70">
                    {tile.markers?.map((marker) => (
                      <li key={marker} className="flex items-center gap-2">
                        <span className="inline-flex h-1.5 w-6 rounded-full bg-brand-accent/80 group-hover:w-8 transition-all duration-500" />
                        {marker}
                      </li>
                    ))}
                  </ul>
                <Link
                  to={tile.cta.to}
                    className="inline-flex w-max items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-brand"
                >
                  {tile.cta.label} <span aria-hidden>→</span>
                </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <div className="fade-up relative z-10">
      <StatsStrip />
      </div>

      {/* Process */}
      <section className="fade-up relative z-10 mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-5 py-12 text-white shadow-[0_30px_90px_rgba(10,32,51,0.45)] backdrop-blur-lg md:px-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)]" />
          <div className="absolute -top-10 right-14 h-64 w-64 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute bottom-0 left-16 h-72 w-72 rounded-full bg-brand-accent/40 blur-3xl" />
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(140deg,rgba(255,255,255,0.08),rgba(255,255,255,0))" }} />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
        <SectionHeading
          eyebrow="Experience Blueprint"
              title="A product-style delivery journey from vision to handover."
              description="We treat every space like a user experience—aligning insight, design, and execution inside governed sprints."
          align="left"
              tone="dark"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {blueprintHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/15 bg-white/8 p-5 shadow-[0_18px_45px_rgba(10,32,51,0.32)] transition duration-300 hover:border-white/25 hover:bg-white/12"
                >
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-2">
            <div className="absolute left-5 top-4 bottom-4 hidden w-px bg-[linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0))] md:block" />
            <div className="space-y-6">
              {ethos.map((step, index) => (
                <div key={step.title} className="relative flex gap-4 md:gap-6">
                  <div className="relative flex flex-col items-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                0{index + 1}
              </span>
                    {index !== ethos.length - 1 && (
                      <span className="hidden h-full w-px flex-1 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.3),rgba(255,255,255,0))] md:inline-block" />
                    )}
                  </div>
                  <div className="flex-1 rounded-3xl border border-white/12 bg-black/35 p-6 shadow-[0_18px_45px_rgba(10,32,51,0.3)] transition duration-300 hover:border-white/25 hover:bg-black/25">
                    <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                    <p className="mt-2 text-sm text-white/70">{step.description}</p>
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
      </section>

      {/* Material expertise */}
      <section className="fade-up relative z-10 mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-5 py-12 text-white shadow-[0_35px_100px_rgba(10,32,51,0.5)] backdrop-blur-lg md:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)]" />
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute -right-16 bottom-4 h-72 w-72 rounded-full bg-brand-accent/40 blur-3xl" />
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(120deg,rgba(255,255,255,0.08),rgba(255,255,255,0))" }} />
        </div>

        <div className="relative grid gap-12 lg:grid-cols-5 lg:items-start">
          <div className="space-y-6 lg:col-span-2">
            <SectionHeading
              eyebrow="Craft & Technology"
              title="Dedicated pods engineered for tactile, measurable experiences."
              description="From concept labs to site execution, every specialist stream runs inside a UX-governed operating system."
              align="left"
              tone="dark"
            />

            <div className="rounded-3xl border border-white/12 bg-black/35 p-6 shadow-[0_18px_45px_rgba(10,32,51,0.32)]">
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
                <span className="inline-flex h-1.5 w-10 rounded-full bg-gradient-to-r from-brand-accent to-white/60" />
                Pods In Action
              </div>
              <div className="mt-5 space-y-4">
                {craftHighlights.map((highlight) => (
                  <div key={highlight.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-white/25 hover:bg-white/10">
                    <span className="mt-1 h-9 w-1 rounded-full bg-gradient-to-b from-brand-accent via-brand to-transparent" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">{highlight.title}</h3>
                      <p className="mt-1 text-xs text-white/70">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {craftTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-3">
            <div className="absolute inset-x-0 top-16 h-px bg-[linear-gradient(to_right,rgba(255,255,255,0),rgba(255,255,255,0.4),rgba(255,255,255,0))]" />
            <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.3),rgba(255,255,255,0))] lg:block" />

            <div className="relative grid gap-6 md:grid-cols-2">
              {materialExpertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                    className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/6 p-6 shadow-[0_22px_55px_rgba(10,32,51,0.32)] transition duration-300 hover:-translate-y-2 hover:border-white/25"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                      style={{ backgroundImage: "linear-gradient(135deg, rgba(209,160,79,0.2), rgba(255,255,255,0))" }}
                    />
                    <div className="relative flex items-center justify-between gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-brand shadow-[0_12px_25px_rgba(10,32,51,0.35)]">
                    <Icon className="text-xl" />
                      </span>
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">
                        Pod {index + 1}
                      </span>
                  </div>
                    <div className="relative mt-6 space-y-3">
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-white/70">{item.description}</p>
                      <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                        <span className="h-px w-8 bg-white/30" /> Experience-ready
                      </span>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="fade-up relative z-10 mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-white/12 bg-white/6 px-6 py-12 text-white shadow-[0_22px_60px_rgba(10,32,51,0.4)] backdrop-blur md:px-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_65%)]" />
          <div className="absolute -left-16 top-8 h-52 w-52 rounded-full bg-brand/30 blur-3xl" />
          <div className="absolute -right-14 bottom-4 h-56 w-56 rounded-full bg-brand-accent/30 blur-3xl" />
        </div>

        <div className="relative space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-white/60">
                Featured Work
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                Signature journeys delivered by experience-led pods.
              </h2>
              <p className="max-w-3xl text-sm text-white/70 md:text-base">
                Filter by vertical to explore case studies that blend spatial storytelling, agile execution, and measurable CX outcomes.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {projectFilters.map((filter) => {
                const isActive = filter === selectedProjectFilter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setSelectedProjectFilter(filter)}
                    className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] transition ${
                      isActive
                        ? "border-white/60 bg-white/15 text-white shadow-[0_10px_25px_rgba(10,32,51,0.28)]"
                        : "border-white/18 text-white/70 hover:border-white/35 hover:text-white"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          {heroProject && (
            <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
              <article className="group relative overflow-hidden rounded-3xl border border-white/15 shadow-[0_20px_55px_rgba(10,32,51,0.35)]">
                {heroProject.cover && (
                  <img
                    src={heroProject.cover}
                    alt={heroProject.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/40 backdrop-blur-[2px]" />
                <div className="relative flex h-full flex-col justify-between gap-6 p-8 md:p-10">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
                        {heroProject.category}
                      </span>
                      <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
                        Case Study
                        <span className="h-1.5 w-5 rounded-full bg-white/30" />
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white md:text-3xl">
                      {heroProject.title}
                    </h3>
                    <p className="max-w-2xl text-sm text-white/75 md:text-base">
                      {heroProject.summary}
                    </p>
                  </div>

                  <div className="grid gap-4 text-xs text-white/70 md:grid-cols-3">
                    {heroProject.metrics?.slice(0, 3).map((metric) => (
                      <div
                        key={`${heroProject.id}-${metric.label}`}
                        className="rounded-2xl border border-white/15 bg-white/10 p-4"
                      >
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55">
                          {metric.label}
                        </span>
                        <p className="mt-2 text-sm font-medium text-white">{metric.value}</p>
                      </div>
                    ))}
                  </div>

                  {heroProject.highlights?.length ? (
                    <ul className="space-y-2 text-sm text-white/75">
                      {heroProject.highlights.slice(0, 3).map((item) => (
                        <li key={`${heroProject.id}-${item}`} className="flex items-start gap-2">
                          <span className="mt-1 inline-flex h-1.5 w-6 rounded-full bg-brand-accent/80" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {heroProject.cta && (
                    <Link
                      to={heroProject.cta.to}
                      className="inline-flex w-max items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-brand"
                    >
                      {heroProject.cta.label} <span aria-hidden>→</span>
                    </Link>
                  )}
                </div>
              </article>

              <div className="grid gap-5">
                {supportingProjects.map((project) => (
                  <article
                    key={project.id}
                    className="group relative overflow-hidden rounded-3xl border border-white/15 bg-black/35 p-6 shadow-[0_16px_40px_rgba(10,32,51,0.3)] transition duration-300 hover:-translate-y-2 hover:border-white/25"
                  >
                    {project.cover && (
                      <div className="absolute inset-0 opacity-20">
                        <img
                          src={project.cover}
                          alt={project.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
                      </div>
                    )}

                    <div className="relative space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full border border-white/18 bg-white/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                          {project.category}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
                          {project.metrics?.[0]?.value ?? ""}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="text-sm text-white/70">{project.summary}</p>

                      {project.highlights?.length ? (
                        <ul className="space-y-2 text-xs text-white/65">
                          {project.highlights.slice(0, 2).map((item) => (
                            <li key={`${project.id}-${item}`} className="flex items-start gap-2">
                              <span className="mt-1 inline-flex h-1 w-4 rounded-full bg-brand-accent/70" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>

                    {project.cta && (
                      <Link
                        to={project.cta.to}
                        className="relative mt-5 inline-flex w-max items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-white hover:text-brand"
                      >
                        {project.cta.label} <span aria-hidden>→</span>
                      </Link>
                    )}
                  </article>
                ))}
              </div>
            </div>
          )}

          {additionalProjects.length > 0 && (
        <div className="fade-up grid gap-4 md:grid-cols-2">
              {additionalProjects.map((project) => (
                <article
                  key={project.id}
                  className="group flex flex-col justify-between rounded-3xl border border-white/12 bg-black/35 p-5 shadow-[0_12px_32px_rgba(10,32,51,0.25)] transition hover:-translate-y-1 hover:border-white/20"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">
                      <span>{project.category}</span>
                      <span>{project.metrics?.[1]?.value ?? project.metrics?.[0]?.value}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{project.summary}</p>
                  </div>
                  {project.cta && (
                    <Link
                      to={project.cta.to}
                      className="mt-4 inline-flex w-max items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition hover:text-brand-accent"
                    >
                      {project.cta.label} <span aria-hidden>→</span>
                    </Link>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="fade-up relative z-10 mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-white/12 bg-white/6 px-6 py-12 text-white shadow-[0_22px_60px_rgba(10,32,51,0.4)] backdrop-blur md:px-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_65%)]" />
          <div className="absolute -left-16 top-8 h-52 w-52 rounded-full bg-brand/30 blur-3xl" />
          <div className="absolute -right-14 bottom-6 h-56 w-56 rounded-full bg-brand-accent/30 blur-3xl" />
        </div>

        <div className="relative space-y-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-white/60">
                Testimonials
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                Voices from clients who experience our design-to-handover rhythm.
              </h2>
              <p className="max-w-3xl text-sm text-white/75 md:text-base">
                Experience pods, transparent sprints, and CX dashboards translate into authentic praise long after handover.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/60">
              {[
                "Average CX Score 4.8/5",
                "70% Repeat Engagements",
                "NPS 68 (World-Class)",
              ].map((token) => (
                <span
                  key={token}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white/75"
                >
                  {token}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/12 bg-white/8 p-4 shadow-[0_20px_55px_rgba(10,32,51,0.35)]">
        <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fade-up relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-brand text-white shadow-[0_35px_80px_rgba(10,32,51,0.35)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(209,160,79,0.35)_0%,_transparent_70%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent">
            Start Your Project
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
            Let’s co-create a signature environment that feels intuitive, inspiring, and future-ready.
          </h2>
          <p className="max-w-2xl text-base text-white/70">
            Share your brief and we’ll organise a design discovery workshop, followed by immersive
            visualisations, curated material palettes, and a transparent project roadmap.
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

export default Home;


