import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/siteContent";

const processSteps = [
  {
    title: "Discovery & Brief",
    copy: "On-site walkthroughs, requirement mapping, feasibility studies, and timeline alignment.",
  },
  {
    title: "Design Development",
    copy: "Mood boards, 3D renders, material mock-ups, and cost-value engineering workshops.",
  },
  {
    title: "Project Mobilisation",
    copy: "Final BOQs, vendor onboarding, execution scheduling, and site safety setup.",
  },
  {
    title: "Execution & QA",
    copy: "Daily site supervision, stage-wise approvals, quality audits, and client reviews.",
  },
  {
    title: "Handover & Support",
    copy: "Snag rectification, documentation, maintenance manuals, and AMC options.",
  },
];

const addOnServices = [
  "MEP design & coordination",
  "Smart home automation",
  "Landscape & facade design",
  "Acoustic & AV integration",
  "LEED and IGBC compliance consulting",
];

const Services = () => {
  return (
    <div className="space-y-24">
      <SEO
        title="Services"
        description="Residential turnkey, commercial projects, renovation, design management, and governance—tailored to your goals."
        keywords={["services", "turnkey", "renovation", "commercial", "residential", "design management"]}
      />
      <PageHero
        title="Services & Capabilities"
        description="Complete design-build solutions covering architecture, interiors, civil contracting, and smart amenities."
        background="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="End-to-end project ownership for residential, commercial, and industrial environments."
        />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-brand/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 md:flex-row md:px-8">
          <div className="flex-1">
            <SectionHeading
              eyebrow="Our Process"
              title="Structured workflows ensure precision, predictability, and peace of mind."
              align="left"
            />
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4 rounded-3xl border border-brand/10 bg-white p-6 shadow-[0_20px_45px_rgba(10,32,51,0.08)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/20 text-sm font-semibold text-brand">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-brand">{step.title}</h4>
                    <p className="mt-2 text-sm text-brand/70">{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <SectionHeading
              eyebrow="Add-On Services"
              title="Complementary expertise under one roof."
              align="left"
            />
            <div className="rounded-3xl border border-brand/10 bg-white p-6 shadow-[0_20px_45px_rgba(10,32,51,0.08)]">
              <ul className="space-y-3 text-sm text-brand/70">
                {addOnServices.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-6 rounded-full bg-brand-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-brand/10 bg-white p-6 shadow-[0_20px_45px_rgba(10,32,51,0.08)]">
              <h4 className="text-lg font-semibold text-brand">Delivery Footprint</h4>
              <p className="mt-3 text-sm text-brand/70">
                Hyderabad · Bengaluru · Chennai · Vijayawada · Mumbai · Pune · Visakhapatnam · Kochi ·
                Delhi NCR
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 md:px-8">
        <SectionHeading
          eyebrow="Quality Benchmarks"
          title="Certified processes that align with international construction standards."
          description="ISO-led project documentation, structured site audits, and stringent material checks ensure every deliverable stands the test of time."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-brand/10 p-6 shadow-[0_18px_35px_rgba(10,32,51,0.08)]">
            <h4 className="text-lg font-semibold text-brand">Documentation</h4>
            <p className="mt-3 text-sm text-brand/70">
              Detailed project charters, GFC drawings, and shared trackers for absolute transparency.
            </p>
          </div>
          <div className="rounded-3xl border border-brand/10 p-6 shadow-[0_18px_35px_rgba(10,32,51,0.08)]">
            <h4 className="text-lg font-semibold text-brand">Vendor Network</h4>
            <p className="mt-3 text-sm text-brand/70">
              Vetted specialists for civil, MEP, carpentry, and finishing works aligned with our QA norms.
            </p>
          </div>
          <div className="rounded-3xl border border-brand/10 p-6 shadow-[0_18px_35px_rgba(10,32,51,0.08)]">
            <h4 className="text-lg font-semibold text-brand">Post-Handover</h4>
            <p className="mt-3 text-sm text-brand/70">
              Comprehensive snagging, documentation, and AMC packages for seamless maintenance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

