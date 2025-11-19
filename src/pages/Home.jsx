import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { testimonials } from "../data/siteContent";
import { FaStar } from "react-icons/fa";

const heroBackgroundImage =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80";

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
    title: "Building Constructions",
    description: "From residential to commercial projects, we construct spaces with precision, ensuring durability and style.",
    image: "/images/building-constructions.webp",
  },
  {
    title: "Architectural Design",
    description: "Our architects blend creativity with functionality to design spaces that inspire and impress.",
    image: "/images/architectural-design.webp",
  },
  {
    title: "Interiors",
    description: "Transform your interiors into stunning, functional spaces that reflect your personality and lifestyle.",
    image: "/images/interiors.webp",
  },
  {
    title: "PMC (Project Management Consultancy)",
    description: "Experience seamless project execution with our expert management services—every detail handled with care.",
    image: "/images/pmc-project-management-consultancy.jpeg",
  },
  {
    title: "Engineering & Contracting",
    description: "Our experienced engineers and contractors work collaboratively to deliver top-notch quality for every build.",
    image: "/images/engineering-contracting.jpeg",
  },
  {
    title: "Renovation & Remodeling",
    description: "Reimagine existing spaces with innovative renovation solutions, adding value and comfort to your property.",
    image: "/images/renovation-remodeling.webp",
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
  {
    title: "Construction Project 1",
    image: "/images/construction1.webp",
    category: "Construction",
  },
  {
    title: "Construction Project 2",
    image: "/images/construction2.webp",
    category: "Construction",
  },
  {
    title: "Construction Project 3",
    image: "/images/construction3.webp",
    category: "Construction",
  },
  {
    title: "Construction Project 4",
    image: "/images/adobe-stock-406163205.jpeg",
    category: "Construction",
  },
  {
    title: "Construction Project 5",
    image: "/images/adobe-stock-375645065.jpeg",
    category: "Construction",
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
      <section className="fade-up relative isolate min-h-[600px] overflow-hidden border-b border-white/5 bg-slate-900 text-white md:min-h-[700px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),transparent_60%)]" />

        {/* Hero Feature Cards - Desktop: inside hero, Mobile: after hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10 mx-auto hidden w-full max-w-6xl px-6 pb-8 md:block md:px-10">
          <div className="grid auto-rows-fr gap-6 rounded-2xl bg-[#1a1a1a]/95 px-8 py-8 backdrop-blur-sm md:grid-cols-3">
            <div className="flex h-full items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-brand-accent/30 bg-brand-accent/10">
                <svg className="h-6 w-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">Rules Of Construction</p>
                <h3 className="mt-2 text-base font-semibold text-white">Industrial Construction Responsibility</h3>
        </div>
            </div>
            <div className="flex h-full items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-brand-accent/30 bg-brand-accent/10">
                <svg className="h-6 w-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">Grow Your Building</p>
                <h3 className="mt-2 text-base font-semibold text-white">Industrial Solution To Build Factory</h3>
            </div>
          </div>
            <div className="flex h-full items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-brand-accent/30 bg-brand-accent/10">
                <svg className="h-6 w-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">Get Construction Help</p>
                <h3 className="mt-2 text-base font-semibold text-white">Delivering The Results You Think That</h3>
              </div>
              </div>
          </div>
        </div>
      </section>

      {/* Hero Feature Cards - Mobile: after hero section */}
      <div className="relative z-10 mx-auto -mt-6 w-full max-w-6xl px-6 md:hidden md:px-10">
        <div className="grid auto-rows-fr gap-6 rounded-2xl bg-[#1a1a1a]/95 px-8 py-8 backdrop-blur-sm">
          <div className="flex h-full items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#06a7d7]/30 bg-[#06a7d7]/10">
              <svg className="h-6 w-6 text-[#06a7d7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#06a7d7]">Rules Of Construction</p>
              <h3 className="mt-2 text-base font-semibold text-white">Industrial Construction Responsibility</h3>
            </div>
          </div>
          <div className="flex h-full items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#06a7d7]/30 bg-[#06a7d7]/10">
              <svg className="h-6 w-6 text-[#06a7d7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#06a7d7]">Grow Your Building</p>
              <h3 className="mt-2 text-base font-semibold text-white">Industrial Solution To Build Factory</h3>
            </div>
          </div>
          <div className="flex h-full items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#06a7d7]/30 bg-[#06a7d7]/10">
              <svg className="h-6 w-6 text-[#06a7d7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#06a7d7]">Get Construction Help</p>
              <h3 className="mt-2 text-base font-semibold text-white">Delivering The Results You Think That</h3>
            </div>
          </div>
        </div>
        </div>

      {/* About */}
      <section className="fade-up mx-auto mt-12 w-full max-w-6xl px-4 py-6 md:mt-20 md:px-6 md:py-10 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="overflow-hidden rounded-[24px] shadow-[0_30px_70px_rgba(15,23,42,0.18)] md:rounded-[32px]">
            <img
              src="/images/adobe-stock-375645065.jpeg"
              alt="Professional construction project"
              className="h-full w-full object-cover"
              style={{ filter: "none" }}
              loading="lazy"
            />
            </div>

          <div className="space-y-4 text-slate-900 md:space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent md:text-sm md:tracking-[0.45em]">About Us</p>
            <h2 className="text-2xl font-semibold leading-tight uppercase md:text-4xl md:text-[42px]">
              Turning Visions Into Reality With A Legacy Of Quality And Trust.
            </h2>
            <p className="text-sm text-slate-600 md:max-w-2xl md:text-base">
              Karthikeya Constructions specializes in delivering superior construction, design, and project management
              services. Our experienced team of architects, engineers, and interior designers works passionately to build
              spaces that inspire.
            </p>
            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap">
              <Link
                to="/about"
                className="w-full rounded-full bg-brand-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-brand-accent/90 sm:w-auto sm:px-10 sm:py-3 sm:text-sm"
              >
                Read More
              </Link>
          <Link
                to="/contact"
                className="w-full rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800 sm:w-auto sm:px-10 sm:py-3 sm:text-sm"
          >
                Contact Us
          </Link>
          </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="fade-up mt-12 bg-[#11111a] py-12 text-white md:mt-16 md:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-6 text-center md:gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-accent md:text-[11px] md:tracking-[0.4em]">Our Services</p>
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">Provided Features</h2>
          <p className="max-w-3xl text-xs text-white/70 md:text-sm lg:text-base">
            Construction, design, interiors, and PMC come together under one roof so that your project feels seamless
            from the first draft to handover.
          </p>
        </div>
        <div className="mx-auto mt-8 grid w-full max-w-6xl gap-6 px-4 md:mt-12 md:gap-8 md:px-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCatalog.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-[24px] bg-[#1c1c27] p-3 text-center shadow-[0_25px_70px_rgba(0,0,0,0.35)] md:rounded-[28px] md:p-4"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                <img src={service.image} alt={service.title} className="h-48 w-full object-cover md:h-52" loading="lazy" />
                </div>
              <div className="mt-4 space-y-2 px-2 pb-2 md:mt-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.05em] md:text-base">{service.title}</h3>
                <p className="text-xs text-white/70 md:text-sm">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="fade-up mt-12 bg-[#e8e1df] py-12 md:mt-16 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="text-center text-brand">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand/60 md:text-[11px] md:tracking-[0.4em]">Home Construction Packages</p>
            <h2 className="mt-2 text-xl font-semibold text-[#1e1e1e] md:text-2xl">Home Construction Packages</h2>
      </div>
          <div className="mt-8 grid gap-6 md:mt-10 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {constructionPackages.map((pkg) => (
              <article key={pkg.tier} className="rounded-[24px] bg-white p-4 shadow-[0_25px_45px_rgba(0,0,0,0.12)] md:rounded-[26px] md:p-6">
                <div className="rounded-full bg-[#f2f2f2] py-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#1e1e1e] shadow-inner md:py-3 md:text-sm">
                  {pkg.price}
        </div>
                <h3 className="mt-4 text-center text-base font-semibold text-[#1e1e1e] md:mt-6 md:text-lg">{pkg.tier}</h3>
                <ul className="mt-4 space-y-2 text-xs text-[#4b4b4b] md:mt-5 md:space-y-3 md:text-sm">
                  {pkg.inclusions.map((item) => (
                    <li key={item} className="border-b border-[#ececec] pb-1.5 last:border-b-0 md:pb-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-4 block rounded-full bg-[#f6a700] py-2 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#e29100] md:mt-6 md:text-xs md:tracking-[0.35em]"
                >
                  Book Now
                </Link>
              </article>
              ))}
            </div>
          </div>
      </section>

      {/* Why Choose Us */}
      <section className="fade-up mx-auto mt-12 w-full max-w-6xl px-4 md:mt-16 md:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-center lg:gap-10">
          <div className="overflow-hidden rounded-[24px] shadow-[0_30px_70px_rgba(15,23,42,0.15)] md:rounded-[32px]">
            <img
              src="/images/adobe-stock-406163205.jpeg"
              alt="Professional construction project showcasing excellence"
              className="h-full w-full object-cover"
              loading="lazy"
            />
                  </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-accent md:text-sm md:tracking-[0.4em]">Why Choose Us?</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-slate-900 md:mt-3 md:text-3xl lg:text-4xl">
              Building Excellence With Expertise, Innovation, And Dedication.
            </h2>
            <div className="mt-6 divide-y divide-[#e4e7ec] border-y border-[#e4e7ec] md:mt-8">
              {[
                "Uncompromising Quality",
                "Experienced Professionals",
                "Tailored Solutions",
                "Timely Completion",
                "Transparent Communication",
              ].map((item) => (
                <div key={item} className="flex items-center justify-between py-3 md:py-4">
                  <span className="text-xs font-semibold text-[#2b2f3a] md:text-sm">{item}</span>
                  <span className="text-base text-[#2b2f3a] md:text-lg">▸</span>
            </div>
          ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="fade-up relative mt-12 w-full bg-[#0f0f16] py-12 text-white md:mt-16 md:py-20">
        <img
          src="/images/construction-site-2.avif"
          alt="Modern construction site"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative mx-auto w-full max-w-6xl px-4 text-center md:px-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-accent md:text-[11px] md:tracking-[0.4em]">
            Our Achievements at a Glance
          </p>
          <h2 className="mt-2 text-xl font-semibold leading-tight md:mt-3 md:text-3xl lg:text-4xl">
            Proud Milestones That Reflect Our Dedication And Expertise
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:mt-12 md:grid-cols-4 md:gap-6">
            {achievements.map((item) => (
              <div
                key={item.label}
                className="rounded-[20px] bg-white/10 px-4 py-6 text-center backdrop-blur-md md:rounded-[24px] md:px-6 md:py-10"
              >
                <p className="text-2xl font-semibold md:text-4xl">
                  {item.value}
                  <span className="text-lg align-super md:text-2xl">+</span>
                </p>
                <p className="mt-2 text-xs text-white/80 md:mt-4 md:text-sm">{item.label}</p>
                <div className="mt-4 h-1 w-8 mx-auto rounded-full bg-brand-accent md:mt-6 md:w-12" />
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="fade-up mx-auto mt-12 w-full max-w-6xl px-4 py-12 text-brand md:mt-16 md:px-6 md:py-16 lg:px-12">
        <SectionHeading
          eyebrow="Our Gallery"
          title="The works we are proud of."
          description="Interiors, corporate hubs, retail showcases, and hospitality lounges captured from our recent delivery slate."
          align="left"
          tone="light"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 md:mt-12">
          {galleryHighlights.map((item) => (
            <figure
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-[#f8fafc] ring-1 ring-brand/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:ring-brand/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] md:rounded-3xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                        />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>
            </figure>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="fade-up mx-auto mt-12 w-full max-w-6xl px-4 py-10 text-center md:mt-16 md:px-6 md:py-12 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-accent md:text-sm md:tracking-[0.4em]">Testimonial</p>
        <h2 className="mt-2 text-xl font-semibold text-[#0a2540] md:mt-3 md:text-3xl lg:text-4xl">
          We Care About Our Customers Experience Too
              </h2>
        <div className="mt-8 grid gap-5 md:mt-12 md:gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, index) => (
                  <article
              key={testimonial.name}
              className="group relative overflow-hidden rounded-xl bg-[#1a1a1a] p-4 text-white transition-all duration-300 hover:bg-brand-accent md:rounded-2xl md:p-6"
            >
              <p className="mb-4 text-xs leading-relaxed text-white/90 md:mb-6 md:text-sm">{testimonial.quote}</p>
              <div className="mb-3 h-px w-full bg-white/20 md:mb-4" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] md:text-sm">Client</span>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="text-[10px] md:text-xs" />
              ))}
            </div>
          </div>
            </article>
              ))}
        </div>
      </section>

      {/* CTA */}
      <section className="fade-up relative my-12 w-full overflow-hidden md:my-16">
        <img
          src="/images/construction-site-1.avif"
          alt="Construction site background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-10">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:gap-10">
            <div className="text-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80 md:text-xs md:tracking-[0.3em]">Where Style Meets Functionality</p>
              <h2 className="mt-2 text-xl font-semibold text-white md:mt-3 md:text-3xl lg:text-4xl">Transforming spaces, elevating lives.</h2>
              <p className="mt-3 text-xs text-white/85 md:mt-4 md:text-sm">
                Share your plot details and our team will schedule a consultation to walk you through designs, timelines, and budgets.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-white/80 md:mt-6 md:space-y-2 md:text-sm">
                <li>• Personalised concepts for villas, apartments, and commercial sites</li>
                <li>• Transparent packages with branded materials</li>
                <li>• Dedicated support even after handover</li>
              </ul>
            </div>
            <form className="space-y-3 rounded-2xl bg-[#1a1a1a]/95 p-4 backdrop-blur-sm md:rounded-3xl md:space-y-4 md:p-6">
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 md:text-xs md:tracking-[0.3em]">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1.5 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-white/50 outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 md:mt-2 md:rounded-2xl md:px-4 md:py-3 md:text-sm"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 md:text-xs md:tracking-[0.3em]">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="mt-1.5 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-white/50 outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 md:mt-2 md:rounded-2xl md:px-4 md:py-3 md:text-sm"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 md:text-xs md:tracking-[0.3em]">Location of Your Plot</label>
                <textarea
                  placeholder="City or neighbourhood"
                  rows={3}
                  className="mt-1.5 w-full resize-none rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-white/50 outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 md:mt-2 md:rounded-2xl md:px-4 md:py-3 md:text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-brand-accent px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-[0_20px_45px_rgba(6,167,215,0.35)] transition hover:bg-brand-accent/90 md:rounded-2xl md:py-3 md:text-sm md:tracking-[0.3em]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

