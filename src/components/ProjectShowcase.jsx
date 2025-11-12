import Slider from "react-slick";
import { projectShowcase } from "../data/siteContent";

const ProjectShowcase = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5500,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="-mx-4 md:-mx-6">
      <Slider {...settings}>
        {projectShowcase.map((project) => (
          <div key={project.title} className="px-4 md:px-6">
            <article className="group overflow-hidden rounded-3xl border border-brand/10 bg-white shadow-[0_24px_50px_rgba(10,32,51,0.12)] transition duration-500">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-brand">
                  {project.category}
                </span>
              </div>
              <div className="space-y-4 p-8">
                <h3 className="text-2xl font-semibold text-brand">{project.title}</h3>
                <p className="text-sm leading-relaxed text-brand/70">{project.description}</p>
              </div>
            </article>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectShowcase;

