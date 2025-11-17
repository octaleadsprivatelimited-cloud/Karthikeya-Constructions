import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ProjectShowcase from "../components/ProjectShowcase";
import useInViewAnimation from "../hooks/useInViewAnimation";

const galleryImages = [
  {
    title: "Grand Lobby",
    description: "Double-height lobby with custom brass lighting and Italian marble cladding.",
    image: "/images/grand-lobby.avif",
  },
  {
    title: "Executive Lounge",
    description: "Premium lounge seating with acoustic ceiling baffles and ambient lighting.",
    image: "/images/executive-lounge.avif",
  },
  {
    title: "Residential Living",
    description: "Warm textures, layered lighting, and bespoke furniture for a penthouse suite.",
    image: "/images/residential-living.avif",
  },
  {
    title: "Collaborative Hub",
    description: "Flexible workstations with biophilic elements for agile teams.",
    image: "/images/collaborative-hub.avif",
  },
  {
    title: "Retail Display",
    description: "High-contrast materials and lighting to hero product storytelling.",
    image: "/images/retail-display.avif",
  },
  {
    title: "Boardroom",
    description: "Minimalist aesthetics with integrated AV and acoustic treatment.",
    image: "/images/boardroom.avif",
  },
  {
    title: "Residential Bedroom",
    description: "Soothing palette, smart storage, and custom headboard lighting.",
    image: "/images/residential-bedroom.avif",
  },
  {
    title: "Cafeteria",
    description: "Vibrant cafeteria with terrazzo flooring and sculptural seating clusters.",
    image: "/images/cafeteria.avif",
  },
  {
    title: "Outdoor Deck",
    description: "Timber deck with pergola, planters, and acoustic privacy screens.",
    image: "/images/outdoor-deck.avif",
  },
  {
    title: "Modern Living Space",
    description: "Contemporary living area with elegant furnishings and sophisticated design.",
    image: "/images/gallery-copy3.jpg",
  },
  {
    title: "Modern Architectural Exterior",
    description: "Contemporary building facade with sleek vertical slats and premium materials.",
    image: "/images/gallery-copy2.jpg",
  },
  {
    title: "Elegant Residential Design",
    description: "Sophisticated residential space with modern amenities and timeless appeal.",
    image: "/images/gallery-copy1.jpg",
  },
  {
    title: "Premium Construction Project",
    description: "High-quality construction work demonstrating precision and craftsmanship.",
    image: "/images/gallery-whatsapp-1.jpg",
  },
  {
    title: "Excellence in Building",
    description: "Showcasing our commitment to quality construction and attention to detail.",
    image: "/images/gallery-whatsapp-2.jpg",
  },
  {
    title: "Professional Construction",
    description: "Expert construction services delivering superior results and client satisfaction.",
    image: "/images/gallery-whatsapp-3.jpg",
  },
];

const backgroundImage =
  "https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=2000&q=80";

const Gallery = () => {
  useInViewAnimation();

  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <SEO
        title="Gallery"
        description="Explore our gallery—residences, workplaces, and hospitality environments crafted by our experience-led pods."
        keywords={["gallery", "projects", "portfolio", "residential", "commercial", "hospitality"]}
        image="/images/hero-whatsapp.jpg"
      />
      <div className="absolute inset-0 -z-10">
        <img
          src={backgroundImage}
          alt="Gallery ambient background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/82" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22)_0%,_rgba(10,32,51,0.85)_70%)]" />
      </div>

      <div className="relative space-y-24 pb-24">
        <PageHero
          title="Gallery & Highlights"
          description="Explore a curated selection of our residential and commercial environments."
          background={backgroundImage}
        />

        <section className="fade-up mx-auto w-full max-w-6xl px-6 md:px-8 text-white">
          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 px-8 py-12 shadow-[0_26px_65px_rgba(10,32,51,0.45)] backdrop-blur md:px-12">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16)_0%,_transparent_65%)]" />
              <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-brand/35 blur-3xl" />
              <div className="absolute -right-16 bottom-6 h-60 w-60 rounded-full bg-brand-accent/30 blur-3xl" />
            </div>

            <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-white/65">
                    Featured Showcase
                  </p>
                  <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                    Immersive spaces designed for impact.
                  </h2>
                  <p className="max-w-2xl text-sm text-white/70 md:text-base">
                    Each project celebrates the unique character of the brand or family we collaborate with—balancing form, function, and future-readiness.
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
                    Hospitality
                  </span>
                  <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">
                    Experience Labs
                  </span>
                </div>
              </div>

              <div className="space-y-6 rounded-3xl border border-white/10 bg-white/8 p-6 shadow-[0_18px_45px_rgba(10,32,51,0.35)]">
                <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">
                  Delivery Metrics
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      label: "Average Delivery",
                      value: "12 Weeks",
                      detail: "Turnkey execution",
                    },
                    {
                      label: "CX Satisfaction",
                      value: "4.9 / 5",
                      detail: "Client NPS & QA audits",
                    },
                    {
                      label: "Partner Ecosystem",
                      value: "40+",
                      detail: "Specialist vendors & OEM tie-ups",
                    },
                    {
                      label: "Project Playbooks",
                      value: "100%",
                      detail: "Documented handovers",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white shadow-[0_12px_30px_rgba(10,32,51,0.35)]"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
                        {item.label}
                      </p>
                      <p className="mt-2 text-xl font-semibold">{item.value}</p>
                      <p className="mt-1 text-xs text-white/75">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-white/65">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                    VR Walkthrough Ready
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                    Procurement Pods
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                    On-site QA
                  </span>
                </div>
              </div>
            </div>

            <div className="relative mt-12 rounded-3xl border border-white/12 bg-white/5 p-4 shadow-[0_22px_55px_rgba(10,32,51,0.4)] backdrop-blur">
              <ProjectShowcase />
            </div>
          </div>
        </section>

        <section className="fade-up bg-white/5 py-24">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 px-8 py-12 text-white shadow-[0_28px_70px_rgba(10,32,51,0.45)] backdrop-blur">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16)_0%,_transparent_65%)]" />
                <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-brand/35 blur-3xl" />
                <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-brand-accent/30 blur-3xl" />
              </div>

              <div className="relative space-y-10">
                <div className="grid gap-6 md:flex md:items-center md:justify-between">
                  <div className="max-w-2xl space-y-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-white/65">
                      Project Gallery
                    </p>
                    <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                      A glimpse into our portfolio of crafted spaces.
                    </h2>
                    <p className="text-sm text-white/70 md:text-base">
                      Discover a breadth of residential villas, commercial workplaces, hospitality destinations, and experience-led retail environments—all engineered for long-term relevance.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                      Show All
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                      Architecture
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                      Interiors
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                      Retail
                    </span>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {galleryImages.map((item, index) => (
                    <figure
                      key={item.title}
                      className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/8 shadow-[0_24px_55px_rgba(10,32,51,0.35)] backdrop-blur transition duration-500 hover:-translate-y-2 hover:bg-white/12"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <figcaption className="absolute inset-0 flex flex-col justify-end p-6 text-brand">
                        <div className="opacity-0 transition duration-500 group-hover:opacity-100">
                          <div className="rounded-2xl border border-brand/10 bg-white/95 p-5 shadow-[0_12px_32px_rgba(10,32,51,0.16)] backdrop-blur">
                            <h3 className="text-xl font-medium text-brand" style={{ fontFamily: "Outfit, sans-serif" }}>
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm text-brand/70">{item.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand/55">
                              <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1">
                                VR Preview
                              </span>
                              <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1">
                                Material Boards
                              </span>
                            </div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fade-up mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 pb-24 text-center text-white md:px-8">
          <SectionHeading
            eyebrow="Need a Custom Walkthrough?"
            title="Request a personalized presentation of relevant case studies."
            description="Share your project goals and we’ll curate a detailed deck with floor plans, finishes, and investment breakdowns tailored to your requirements."
            tone="dark"
          />
          <Link
            to="/contact"
            className="rounded-full border border-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-brand"
          >
            Schedule A Presentation
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Gallery;

