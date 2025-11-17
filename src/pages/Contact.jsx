import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import { contactDetails } from "../data/siteContent";
import { FaEnvelopeOpenText, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import useInViewAnimation from "../hooks/useInViewAnimation";

const backgroundImage =
  "https://images.unsplash.com/photo-1505843439830-21f06caa06e1?auto=format&fit=crop&w=2000&q=80";

const Contact = () => {
  useInViewAnimation();

  const quickFacts = [
    {
      label: "Response Time",
      value: "< 24 Hrs",
      detail: "Dedicated client success desk",
    },
    {
      label: "Delivery Footprint",
      value: "7 Cities",
      detail: "Pan-India turnkey expertise",
    },
    {
      label: "Experience Modules",
      value: "40+",
      detail: "Curated walkthrough playbooks",
    },
    {
      label: "Vendor Ecosystem",
      value: "60+",
      detail: "Certified trade & OEM partners",
    },
  ];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`;
  const googleMapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(contactDetails.address)}&output=embed`;

  return (
    <div className="relative isolate min-h-screen bg-white">
      <SEO
        title="Contact"
        description="Contact Karthikeya Constructions for consultations, proposals, and site visits."
        keywords={["contact", "consultation", "proposal", "site visit", "phone", "email"]}
        image="/images/hero-whatsapp.jpg"
      />

      <div className="relative space-y-24 pb-24">
        <PageHero
          title="Connect With Our Team"
          description="We’re ready to collaborate on your next residential, commercial, or turnkey project."
          background={backgroundImage}
        />

        <section className="fade-up mx-auto w-full max-w-6xl px-6 md:px-8 text-brand">
          <div className="rounded-3xl bg-white px-6 py-12 md:px-10">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-center">
              <div className="space-y-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-brand/60">
                  Contact Us
                </p>
                <h2 className="text-3xl font-semibold leading-tight text-brand md:text-4xl">
                  Schedule a site visit, design consultation, or discovery workshop.
                </h2>
                <p className="max-w-2xl text-sm text-brand/70 md:text-base">
                  Share a few project details and our consultants will align the right team—architecture, interior experience, procurement, and on-site execution—to move your brief forward.
                </p>
                <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand/60">
                  <span className="rounded-full border border-brand/20 bg-brand/5 px-4 py-2">
                    Site Visits
                  </span>
                  <span className="rounded-full border border-brand/20 bg-brand/5 px-4 py-2">
                    Design Consults
                  </span>
                  <span className="rounded-full border border-brand/20 bg-brand/5 px-4 py-2">
                    Project Estimates
                  </span>
                  <span className="rounded-full border border-brand/20 bg-brand/5 px-4 py-2">
                    Vendor Alignments
                  </span>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-3xl bg-[#f8fafc] p-5 text-brand"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand/60">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-brand">{fact.value}</p>
                    <p className="mt-2 text-xs text-brand/65">{fact.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.15fr]">
              <div className="space-y-6">
                {[
                  {
                    icon: <FaPhoneAlt />,
                    title: "Call Us",
                    content: (
                      <div className="mt-2 space-y-2 text-sm text-brand/70">
                        <p>
                          Primary:{" "}
                          <a href={`tel:${contactDetails.phonePrimary}`} className="text-brand hover:text-brand-accent">
                            {contactDetails.phonePrimary}
                          </a>
                        </p>
                        <p>
                          Projects:{" "}
                          <a href={`tel:${contactDetails.phoneSecondary}`} className="text-brand hover:text-brand-accent">
                            {contactDetails.phoneSecondary}
                          </a>
                        </p>
                      </div>
                    ),
                  },
                  {
                    icon: <FaEnvelopeOpenText />,
                    title: "Email",
                    content: (
                      <p className="mt-2 text-sm text-brand/70">
                        Send your project brief to{" "}
                        <a href={`mailto:${contactDetails.email}`} className="text-brand hover:text-brand-accent">
                          {contactDetails.email}
                        </a>
                      </p>
                    ),
                  },
                  {
                    icon: <FaMapMarkerAlt />,
                    title: "Studio",
                    content: (
                      <p className="mt-2 text-sm text-brand/70">
                        <a
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand hover:text-brand-accent underline-offset-4 hover:underline"
                        >
                          {contactDetails.address}
                        </a>
                      </p>
                    ),
                  },
                  {
                    icon: <FaClock />,
                    title: "Working Hours",
                    content: (
                      <p className="mt-2 text-sm text-brand/70">{contactDetails.workHours}</p>
                    ),
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="group relative overflow-hidden rounded-3xl bg-[#f8fafc] p-6 text-brand transition duration-500 hover:-translate-y-2"
                  >
                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand/5 blur-2xl transition duration-500 group-hover:bg-brand/10" />
                    <div className="relative flex items-start gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand/15 bg-white text-brand">
                        {card.icon}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-brand">{card.title}</h3>
                        {card.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6 rounded-3xl bg-[#f8fafc] p-8 text-brand">
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-brand/60">
                    Project Inquiry
                  </p>
                  <h3 className="text-xl font-semibold text-brand">Let’s co-create your next environment.</h3>
                  <p className="text-sm text-brand/70">
                    Outline requirements, scope, and budget triggers. Our team will respond with a tailored roadmap and discovery call slots.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="fade-up mx-auto w-full max-w-6xl px-6 pb-24 text-brand md:px-8">
          <div className="rounded-3xl bg-white px-6 py-12 md:px-10">
            <SectionHeading
              eyebrow="Visit Us"
              title="Our studio is located in the heart of Secunderabad."
              tone="light"
            />
            <div className="mt-8 overflow-hidden rounded-3xl">
              <iframe
                title="Karthikeya Constructions"
                src={googleMapsEmbedSrc}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

