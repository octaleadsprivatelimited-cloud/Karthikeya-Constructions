import Slider from "react-slick";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "../data/siteContent";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "ease-in-out",
    appendDots: (dots) => (
      <div>
        <ul className="mt-6 flex items-center justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button type="button">
        <span className="testimonial-dot block h-2 w-8 rounded-full bg-white/25 transition-all duration-300" />
      </button>
    ),
  };

  return (
    <div className="testimonial-slider -mx-3 md:-mx-4">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="px-3 md:px-4">
            <article className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/8 to-white/5 px-6 py-8 text-white shadow-[0_24px_55px_rgba(10,32,51,0.32)] backdrop-blur">
              <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-brand/25 blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-brand-accent/35 blur-3xl" />

              <div className="relative flex flex-col gap-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 shadow-[0_12px_35px_rgba(10,32,51,0.3)]">
                  <FaQuoteLeft className="text-lg" />
                </span>

                <div className="flex items-center gap-1 text-brand-accent">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} className="text-sm" />
                  ))}
                  <span className="ml-2 text-xs uppercase tracking-[0.32em] text-white/60">
                    Client Score
                  </span>
                </div>

                <p className="text-base leading-relaxed text-white/80">{testimonial.quote}</p>

                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full border border-white/20 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/50">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;

