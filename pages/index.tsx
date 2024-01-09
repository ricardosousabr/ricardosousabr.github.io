import Header from "../src/components/Molecules/Header";
import Skills from "../src/components/Molecules/Skills";
import Facts from "../src/components/Molecules/Facts";
import Education from "../src/components/Molecules/Education";
import Project from "../src/components/Molecules/Project";
import Footer from "../src/components/Molecules/Footer";
import locale from "@/src/locales";
import { NextSeo } from 'next-seo';

export default function Home() {
  const { header } = locale['pt-br'];
  const { skills } = locale['pt-br'];
  const { facts } = locale['pt-br'];
  const { education } = locale['pt-br'];
  const { project } = locale['pt-br'];
  const { footer } = locale['pt-br'];

  return (
    <>
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
        ]}
      />
      <Header {...header} />
      <Skills {...skills} />
      <Facts {...facts} />
      <Education {...education} />
      <Project {...project} />
      <Footer {...footer} />
    </>
  );
}
