const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}) => {
  const alignment = align === "left" ? "text-left" : "text-center";
  const eyebrowColor =
    tone === "dark" ? "text-brand-accent" : "text-brand-accent";
  const titleColor = tone === "dark" ? "text-white" : "text-brand";
  const descriptionColor = tone === "dark" ? "text-white/70" : "text-brand/70";

  return (
    <div className={`mx-auto mb-10 max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.35em] ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className={`text-3xl font-semibold leading-tight md:text-4xl ${titleColor}`}>
          {title}
        </h2>
      )}
      {description && (
        <p className={`mt-4 text-base md:text-lg ${descriptionColor}`}>{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;

