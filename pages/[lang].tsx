import Header from "../src/components/Molecules/Header";
import Skills from "../src/components/Molecules/Skills";
import Facts from "../src/components/Molecules/Facts";
import Education from "../src/components/Molecules/Education";
import Project from "../src/components/Molecules/Project";
import Footer from "../src/components/Molecules/Footer";
import locale from "../src/locales";
import jsonData from "../src/locales/data.json";
import { NextSeo } from 'next-seo';
import { ThemeProvider } from '@gympass/yoga';

export default function Home() {
  const { header, skill, fact, education, project, footer } = jsonData;

  console.log(jsonData)

  return (
    <>
      <ThemeProvider>
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
        <Header {...header} />
        <Skills {...skill} />
        <Facts {...fact} />
        <Education {...education} />
        <Project {...project} />
        <Footer {...footer} />
      </ThemeProvider>
    </>
  )
}
