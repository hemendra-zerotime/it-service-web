import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
};

export default function SEO({ title, description, keywords }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta charSet="UTF-8" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
}
