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
    centerMode: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="-mx-4 md:-mx-6">
      <Slider {...settings}>
        {projectShowcase.map((project) => (
          <div key={project.title} className="px-2 md:px-6">
            <article className="group overflow-hidden rounded-3xl border border-brand/10 bg-white shadow-[0_24px_50px_rgba(10,32,51,0.12)] transition duration-500">
              <div className="relative h-64 overflow-hidden md:h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-brand md:left-6 md:top-6 md:px-4">
                  {project.category}
                </span>
              </div>
              <div className="space-y-3 p-6 md:space-y-4 md:p-8">
                <h3 className="text-xl font-semibold text-brand md:text-2xl">{project.title}</h3>
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

