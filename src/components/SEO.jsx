import { Helmet } from "react-helmet-async";
export default function SEO({ title, description, keywords, faq }) {
  return (
    <>
      {" "}
      <Helmet>
        {" "}
        <title>{title}</title> <meta name="description" content={description} />{" "}
        <meta name="keywords" content={keywords} />{" "}
        <meta name="robots" content="index, follow" />{" "}
      </Helmet>{" "}
      {/* Article Schema */}{" "}
      <script type="application/ld+json">
        {" "}
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description: description,
          author: { "@type": "Person", name: "Muzammil" },
        })}{" "}
      </script>{" "}
      {/* FAQ Schema */}{" "}
      {faq && (
        <script type="application/ld+json">
          {" "}
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq,
          })}{" "}
        </script>
      )}{" "}
    </>
  );
}
