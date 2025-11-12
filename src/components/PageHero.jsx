const PageHero = ({ title, description, background }) => {
  return (
    <section
      className="relative flex min-h-[45vh] items-center justify-center overflow-hidden bg-brand text-white"
      style={
        background
          ? {
              backgroundImage: `linear-gradient(rgba(10,32,51,0.7), rgba(10,32,51,0.8)), url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center md:px-8">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-accent">Karthikeya Constructions</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">{title}</h1>
        {description && <p className="mt-6 text-base text-white/70 md:text-lg">{description}</p>}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand/40 via-brand/20 to-transparent" aria-hidden />
    </section>
  );
};

export default PageHero;

