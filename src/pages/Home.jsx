import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
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

const aboutPillars = [
  {
    title: "Industrial construction responsibility",
    description: "We treat every industrial build with rigorous safety systems, quality benchmarks, and transparent reporting.",
  },
  {
    title: "Grow your building",
    description: "Factory-fit solutions, expansion pods, and compliant infrastructure that keep your operations future ready.",
  },
  {
    title: "Get construction help",
    description: "Dedicated project managers ensure you receive the workmanship, communication, and timelines you expect.",
  },
];

const serviceCatalog = [
  {
    icon: "🏗️",
    title: "Building Constructions",
    description: "From residential villas to corporate offices, we engineer structures with durability and design finesse.",
  },
  {
    icon: "📐",
    title: "Architectural Design",
    description: "Creative concepts balanced with functionality, compliance, and brand storytelling.",
  },
  {
    icon: "🛋️",
    title: "Interiors",
    description: "Warm, functional interiors that mirror your personality while optimising layouts and storage.",
  },
  {
    icon: "🧭",
    title: "PMC (Project Management Consultancy)",
    description: "End-to-end governance with cost controls, scheduling, and vendor coordination.",
  },
  {
    icon: "⚙️",
    title: "Engineering & Contracting",
    description: "Experienced engineers and contractors working in sync to deliver uncompromised quality on-site.",
  },
  {
    icon: "🧱",
    title: "Renovation & Remodeling",
    description: "Reimagine legacy properties with structural upgrades, new services, and contemporary finishes.",
  },
];

const constructionPackages = [
  {
    tier: "Premium Signature Package",
    price: "Rs. 2,249/sq.ft",
    inclusions: [
      "M-Sand aggregates + FE500/FE550D steel",
      "Bathroom wall tiles up to Rs.80/sq.ft",
      "Internal flooring up to Rs.120/sq.ft",
      "Havells/GM switches with Polycab wiring",
      "Sanitary fittings worth Rs.40,000 per bathroom",
    ],
  },
  {
    tier: "Elite Comfort Package",
    price: "Rs. 2,149/sq.ft",
    inclusions: [
      "Premium kitchen sink up to Rs.10,000",
      "Bathroom wall tiles up to Rs.60/sq.ft",
      "Internal flooring up to Rs.100/sq.ft",
      "Burma Border / Red Sal main door",
      "CPVC/UPVC by Ashirwad & Supreme",
    ],
  },
  {
    tier: "Smart Value Package",
    price: "Rs. 1,949/sq.ft",
    inclusions: [
      "Bathroom wall tiles up to Rs.55/sq.ft",
      "Parking tiles up to Rs.50/sq.ft",
      "Staircase flooring up to Rs.70/sq.ft",
      "Main door in Burma Border / WPC",
      "Sanitary fittings worth Rs.20,000 per bathroom",
    ],
  },
  {
    tier: "Essential Starter Package",
    price: "Rs. 1,749/sq.ft",
    inclusions: [
      "Bathroom wall tiles up to Rs.40/sq.ft",
      "Internal flooring up to Rs.50/sq.ft",
      "Ghana Teak / Neem wood main door",
      "Hi-Fi / GM switches with Maharaja wiring",
      "Sanitary fittings worth Rs.15,000 per bathroom",
    ],
  },
];

const whyChooseReasons = [
  "Uncompromising construction quality & detailing",
  "Experienced architects, engineers, and designers",
  "Tailored solutions for every lifestyle and plot",
  "Projects delivered on schedule with crystal-clear updates",
  "Transparent communication and documentation",
];

const achievements = [
  { label: "Projects Completed", value: "150+" },
  { label: "Happy Clients", value: "300+" },
  { label: "Years of Experience", value: "12+" },
  { label: "Expert Professionals", value: "80+" },
];

const galleryHighlights = [
  {
    title: "Luxury Living Area",
    image: "/images/gallery-copy3.jpg",
    category: "Residential",
  },
  {
    title: "Corporate Collaboration Hub",
    image: "/images/gallery-copy2.jpg",
    category: "Commercial",
  },
  {
    title: "Signature Villa Frontage",
    image: "/images/gallery-copy1.jpg",
    category: "Premium Villas",
  },
  {
    title: "Contemporary Workspace",
    image: "/images/gallery-whatsapp-1.jpg",
    category: "Office Interiors",
  },
  {
    title: "Showroom Experience",
    image: "/images/gallery-whatsapp-2.jpg",
    category: "Retail",
  },
  {
    title: "Hospitality Lounge",
    image: "/images/gallery-whatsapp-3.jpg",
    category: "Hospitality",
  },
];

const Home = () => {
  useInViewAnimation();

  return (
    <main className="bg-white text-brand">
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
      <section className="fade-up mx-auto mt-16 w-full max-w-6xl bg-white p-6 md:p-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr]">
          <div>
        <SectionHeading
              eyebrow="About Us"
              title="Turning visions into reality with a legacy of quality and trust."
              description="We specialise in delivering superior construction, design, and PMC services across Bengaluru and South India. Architects, engineers, and interior designers work in one agile pod so every space feels inspiring and dependable."
          align="left"
              tone="light"
            />
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-brand/90"
              >
                Read More
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand transition hover:bg-brand hover:text-white"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {aboutPillars.map((item) => (
                <div key={item.title} className="rounded-2xl border border-brand/10 bg-[#f8fafc] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand/60">Rule</p>
                  <h3 className="mt-2 text-base font-semibold text-brand">{item.title}</h3>
                  <p className="mt-2 text-sm text-brand/70">{item.description}</p>
                </div>
              ))}
            </div>
        </div>
          <div className="relative overflow-hidden rounded-[32px] bg-brand/5">
            <img
              src="/images/construction-site-1.avif"
              alt="Engineers planning on site"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-5 py-4 text-sm text-brand shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/60">Site in Focus</p>
              <p className="mt-2 font-semibold">Industrial construction responsibility</p>
          </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="fade-up mx-auto mt-16 w-full max-w-6xl rounded-3xl bg-white px-6 py-12 text-brand md:px-12">
        <SectionHeading
          eyebrow="Our Services"
          title="Provided features curated for contemporary construction."
          description="Construction, design, interiors, and PMC come together under one roof so that your project feels seamless end-to-end."
          align="left"
          tone="light"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {serviceCatalog.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl bg-[#f8fafc] p-6 text-brand transition hover:-translate-y-1.5"
            >
              <div className="flex items-center gap-3 text-3xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/10 bg-white text-brand">
                  {service.icon}
                </span>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
              <p className="mt-3 text-sm text-brand/70">{service.description}</p>
            </article>
          ))}
                </div>
      </section>

      {/* Packages */}
      <section className="fade-up mx-auto mt-16 w-full max-w-6xl rounded-3xl bg-white px-6 py-12 md:px-12">
        <SectionHeading
          eyebrow="Home Construction Packages"
          title="Transparent pricing that balances style and structure."
          description="Pick the package that suits your lifestyle, material specification, and finishing expectations."
          align="left"
          tone="light"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {constructionPackages.map((pkg) => (
            <article key={pkg.tier} className="rounded-3xl bg-[#f8fafc] p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/60">Package</p>
                  <h3 className="text-xl font-semibold text-brand">{pkg.tier}</h3>
        </div>
                <p className="rounded-full bg-brand/5 px-4 py-2 text-sm font-semibold text-brand">{pkg.price}</p>
                </div>
              <ul className="mt-5 space-y-2 text-sm text-brand/70">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                <Link
                to="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-brand px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand transition hover:bg-brand hover:text-white"
                >
                Book Now
                </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="fade-up mx-auto mt-16 w-full max-w-6xl rounded-3xl bg-white px-6 py-12 text-brand md:px-12">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Building excellence with expertise, innovation, and dedication."
          description="We combine uncompromising quality with transparent communication so you always know what’s happening on-site."
          align="left"
          tone="light"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {whyChooseReasons.map((reason, index) => (
            <div
              key={reason}
              className="group flex items-start gap-4 rounded-3xl border border-brand/10 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-brand/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 via-brand/5 to-brand-light/10 text-sm font-semibold text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-semibold text-brand/80">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="fade-up mx-auto mt-16 w-full max-w-6xl rounded-3xl bg-white px-6 py-12 md:px-12">
            <SectionHeading
          eyebrow="Our Achievements at a Glance"
          title="Proud milestones that reflect our dedication and expertise."
              align="left"
          tone="light"
        />
        <div className="grid gap-6 md:grid-cols-4">
          {achievements.map((item) => (
            <div key={item.label} className="rounded-3xl bg-[#f8fafc] p-6 text-center">
              <p className="text-3xl font-semibold text-brand">{item.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand/60">{item.label}</p>
                  </div>
                ))}
        </div>
      </section>

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
          {galleryHighlights.map((item) => (
            <figure key={item.title} className="group overflow-hidden rounded-3xl bg-[#f8fafc]">
              <div className="relative h-56">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
                  {item.category}
                      </span>
                    </div>
              <div className="p-5">
                <p className="text-base font-semibold">{item.title}</p>
                  </div>
            </figure>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="fade-up mx-auto mt-16 w-full max-w-6xl rounded-3xl bg-white px-6 py-12 text-brand md:px-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="We care about our customers’ experience too."
          description="Hear how homeowners and businesses describe working with our construction and interiors teams."
          align="left"
          tone="light"
        />
        <TestimonialSlider />
      </section>

      {/* CTA */}
      <section className="fade-up mx-auto my-16 w-full max-w-6xl rounded-3xl bg-white px-6 py-12 md:px-12">
        <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/60">Where Style Meets Functionality</p>
            <h2 className="mt-3 text-3xl font-semibold text-brand">Transforming spaces, elevating lives.</h2>
            <p className="mt-4 text-sm text-brand/70">
              Share your plot details and our team will schedule a consultation to walk you through designs, timelines, and budgets.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-brand/70">
              <li>• Personalised concepts for villas, apartments, and commercial sites</li>
              <li>• Transparent packages with branded materials</li>
              <li>• Dedicated support even after handover</li>
            </ul>
          </div>
          <form className="space-y-4 rounded-3xl bg-[#f8fafc] p-6">
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/60">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full rounded-2xl border border-brand/10 bg-white px-4 py-3 text-sm text-brand outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/60">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                className="mt-2 w-full rounded-2xl border border-brand/10 bg-white px-4 py-3 text-sm text-brand outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/60">Location of Your Plot</label>
              <input
                type="text"
                placeholder="City or neighbourhood"
                className="mt-2 w-full rounded-2xl border border-brand/10 bg-white px-4 py-3 text-sm text-brand outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-2xl bg-brand px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_20px_45px_rgba(4,10,30,0.25)] transition hover:bg-brand/90"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;

