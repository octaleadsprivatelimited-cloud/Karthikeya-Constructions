import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords = [], image, url }) => {
  const metaTitle = title ? `${title} | Karthikeya Constructions` : "Karthikeya Constructions";
  const metaDescription =
    description ||
    "Residential and commercial turnkey construction, interiors, renovation, and governance across India.";
  const metaKeywords = keywords.join(", ");
  const metaImage = image || "/images/logo.png";
  const metaUrl = url || "https://karthikeya-constructions.example";

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;

