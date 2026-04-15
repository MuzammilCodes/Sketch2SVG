import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, keywords, faq }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: "Muzammil"
    },
    publisher: {
      "@type": "Organization",
      name: "Sketch2SVG"
    }
  };

  const faqSchema = faq && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>

      {/* FAQ Schema */}
      {faq && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
}
