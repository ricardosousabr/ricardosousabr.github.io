export interface SeoProps {
  title: string;
  description: string;
  openGraph: {
    type: string,
    url: string,
    title: string,
    description: string,
    images: [
      {
        url: string,
        width: number,
        height: number,
        alt: string,
        type: string,
      }
    ],
    siteName: string,
  };
  additionalLinkTags: [
    {
      rel: string,
      href: string,
    },
    {
      rel: string,
      href: string,
      as: string,
      type: string,
    },
  ]
}