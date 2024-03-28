import { NextSeo } from 'next-seo';
import { SeoProps } from './types';

export default function Seo({ title }: SeoProps) {
  return (
      <NextSeo
        title="Meu Portfolio - Ricardo"
        description="Olá esse é o meu Portfolio venha, um desenvolvedor front-end apaixonado pela minha profissão. Me esforcei muito para aprender tudo que sei, veja mais sobre mim nesse link."
        openGraph={{
          type: 'website',
          url: 'https://ricardosousabr.github.io/',
          title: 'Acesse o link para conhecer sobre mim',
          description: "Olá esse é o meu Portfolio venha, um desenvolvedor front-end apaixonado pela minha profissão. Me esforcei muito para aprender tudo que sei, veja mais sobre mim nesse link.",
          images: [
            {
              url: '../public/img/Profile-SEO.png',
              width: 800,
              height: 600,
              alt: 'Profile SEO',
              type: 'image/png',
            }
          ],
          siteName: 'Portfolio - Ricardo',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/icon/favicon.ico',
          },
          {
            rel: 'preload',
            href: 'https://fonts.googleapis.com/css2?family=Fira+Code&family=Oswald&family=Preahvihear&family=Roboto&display=swap',
            as: 'font',
            type: 'font/woff2',
          },
        ]}
      />
  )
}