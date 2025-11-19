import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ProjectShowcase from "../components/ProjectShowcase";
import useInViewAnimation from "../hooks/useInViewAnimation";

const galleryImages = [
  // Construction images - displayed first
  {
    title: "Construction Project 1",
    description: "High-quality construction work showcasing precision engineering and skilled craftsmanship.",
    image: "/images/construction1.webp",
  },
  {
    title: "Construction Project 2",
    description: "Modern construction site demonstrating professional project management and quality execution.",
    image: "/images/construction2.webp",
  },
  {
    title: "Construction Project 3",
    description: "Premium construction project highlighting superior building techniques and attention to detail.",
    image: "/images/construction3.webp",
  },
  {
    title: "Construction Project 4",
    description: "Expert construction services showcasing advanced building techniques and quality materials.",
    image: "/images/adobe-stock-406163205.jpeg",
  },
  {
    title: "Construction Project 5",
    description: "Professional construction project demonstrating excellence in design and execution.",
    image: "/images/adobe-stock-375645065.jpeg",
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
  // Other gallery images
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
];

const backgroundImage =
  "https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=2000&q=80";

const Gallery = () => {
  useInViewAnimation();

  return (
    <div className="relative isolate min-h-screen bg-white">
      <SEO
        title="Gallery"
        description="Explore our gallery—residences, workplaces, and hospitality environments crafted by our experience-led pods."
        keywords={["gallery", "projects", "portfolio", "residential", "commercial", "hospitality"]}
        image="/images/hero-whatsapp.jpg"
      />

      <div className="relative space-y-12 pb-12 md:space-y-24 md:pb-24">
        <PageHero
          title="Gallery & Highlights"
          description="Explore a curated selection of our residential and commercial environments."
          background={backgroundImage}
        />

        <section className="fade-up mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 text-brand">
          <div className="rounded-2xl bg-white px-5 py-8 md:rounded-3xl md:px-8 md:py-12 lg:px-12">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-center md:gap-10">
              <div className="space-y-5 md:space-y-6">
                <div className="space-y-2 md:space-y-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand/60 md:text-[11px] md:tracking-[0.4em]">
                    Featured Showcase
                  </p>
                  <h2 className="text-2xl font-semibold leading-tight text-brand md:text-3xl lg:text-4xl">
                    Immersive spaces designed for impact.
                  </h2>
                  <p className="max-w-2xl text-xs text-brand/70 md:text-sm lg:text-base">
                    Each project celebrates the unique character of the brand or family we collaborate with—balancing form, function, and future-readiness.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand/60 md:gap-3 md:text-[11px]">
                  <span className="rounded-full border border-brand/15 bg-brand/5 px-3 py-1.5 md:px-4 md:py-2">
                    Residential
                  </span>
                  <span className="rounded-full border border-brand/15 bg-brand/5 px-3 py-1.5 md:px-4 md:py-2">
                    Commercial
                  </span>
                  <span className="rounded-full border border-brand/15 bg-brand/5 px-3 py-1.5 md:px-4 md:py-2">
                    Hospitality
                  </span>
                  <span className="rounded-full border border-brand/15 bg-brand/5 px-3 py-1.5 md:px-4 md:py-2">
                    Experience Labs
                  </span>
                </div>
              </div>

              <div className="space-y-5 rounded-2xl bg-[#f3f7fb] p-4 text-brand md:rounded-3xl md:space-y-6 md:p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-brand/60 md:text-sm">
                  Delivery Metrics
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
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
                    <div key={item.label} className="rounded-xl bg-white p-3 text-brand ring-1 ring-brand/10 md:rounded-2xl md:p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand/55 md:text-[11px]">
                        {item.label}
                      </p>
                      <p className="mt-1.5 text-lg font-semibold md:mt-2 md:text-xl">{item.value}</p>
                      <p className="mt-1 text-[10px] text-brand/70 md:text-xs">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 text-[10px] text-brand/60 md:gap-3 md:text-xs">
                  <span className="rounded-full border border-brand/15 bg-white px-2.5 py-0.5 md:px-3 md:py-1">
                    VR Walkthrough Ready
                  </span>
                  <span className="rounded-full border border-brand/15 bg-white px-2.5 py-0.5 md:px-3 md:py-1">
                    Procurement Pods
                  </span>
                  <span className="rounded-full border border-brand/15 bg-white px-2.5 py-0.5 md:px-3 md:py-1">
                    On-site QA
                  </span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 rounded-2xl bg-[#f8fafc] p-3 md:mt-12 md:rounded-3xl md:p-4">
              <ProjectShowcase />
            </div>
          </div>
        </section>

        <section className="fade-up bg-white py-12 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
            <div className="rounded-2xl bg-white px-5 py-8 text-brand md:rounded-3xl md:px-8 md:py-12 lg:px-12">
              <div className="space-y-8 md:space-y-10">
                <div className="grid gap-6 md:flex md:items-center md:justify-between">
                  <div className="max-w-2xl space-y-3 md:space-y-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand/60 md:text-[11px] md:tracking-[0.4em]">
                      Project Gallery
                    </p>
                    <h2 className="text-2xl font-semibold leading-tight text-brand md:text-3xl lg:text-4xl">
                      A glimpse into our portfolio of crafted spaces.
                    </h2>
                    <p className="text-xs text-brand/70 md:text-sm lg:text-base">
                      Discover a breadth of residential villas, commercial workplaces, hospitality destinations, and experience-led retail environments—all engineered for long-term relevance.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand/60 md:gap-3 md:text-[11px]">
                    <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1.5 md:px-4 md:py-2">
                      Show All
                    </span>
                    <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1.5 md:px-4 md:py-2">
                      Architecture
                    </span>
                    <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1.5 md:px-4 md:py-2">
                      Interiors
                    </span>
                    <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1.5 md:px-4 md:py-2">
                      Retail
                    </span>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                  {galleryImages.map((item, index) => (
                    <figure
                      key={item.title}
                      className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-brand/10 transition duration-500 hover:-translate-y-2 hover:ring-brand/30 md:rounded-3xl"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-56 w-full object-cover transition duration-700 group-hover:scale-110 md:h-72"
                        loading="lazy"
                      />
                      <figcaption className="absolute inset-0 flex flex-col justify-end p-4 text-brand md:p-6">
                        <div className="opacity-0 transition duration-500 group-hover:opacity-100">
                          <div className="rounded-xl border border-brand/10 bg-white/95 p-4 shadow-[0_12px_32px_rgba(15,23,42,0.18)] backdrop-blur md:rounded-2xl md:p-5">
                            <h3 className="text-base font-medium text-brand md:text-xl" style={{ fontFamily: "Outfit, sans-serif" }}>
                              {item.title}
                            </h3>
                            <p className="mt-1.5 text-xs text-brand/70 md:mt-2 md:text-sm">{item.description}</p>
                            <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand/55 md:mt-4 md:gap-2 md:text-[11px]">
                              <span className="rounded-full border border-brand/20 bg-brand/5 px-2.5 py-0.5 md:px-3 md:py-1">
                                VR Preview
                              </span>
                              <span className="rounded-full border border-brand/20 bg-brand/5 px-2.5 py-0.5 md:px-3 md:py-1">
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

        <section className="fade-up mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 pb-24 text-center text-brand md:px-8">
          <SectionHeading
            eyebrow="Need a Custom Walkthrough?"
            title="Request a personalized presentation of relevant case studies."
            description="Share your project goals and we’ll curate a detailed deck with floor plans, finishes, and investment breakdowns tailored to your requirements."
            tone="light"
          />
          <Link
            to="/contact"
            className="rounded-full border border-brand px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand transition hover:bg-brand hover:text-white"
          >
            Schedule A Presentation
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Gallery;

