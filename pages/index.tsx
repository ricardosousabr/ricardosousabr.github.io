import Header from "../src/components/Molecules/Header";
import Skills from "../src/components/Molecules/Skills";
import Education from "../src/components/Molecules/Education";
import Project from "../src/components/Molecules/Project";
import Footer from "../src/components/Molecules/Footer";
import { NextSeo } from 'next-seo';

export default function Home() {
  const skillItens = [
    "Next.js",
    "React.js",
    "JavaScript",
    "Storybook",
    "Firebase",
    "Styled-components",
    "HTML",
    "CSS",
    "Jest",
    "SASS",
    "Cypress.io",
    "Bootstrap",
    "JQuery",
    "Prettier",
    "ESLint",

  ];
  return (
    <>
      <NextSeo
        title="Meu portiolio"
        description="Olá esse é o meu portifolio venha, um desenvolvedor front-end apaixonado pela minha profissão. Me esforcei muito para aprender tudo que sei, veja mais sobre mim nesse link."
        openGraph={{
          type: 'website',
          url: 'https://ricardosousabr.github.io/',
          title: 'Acesse o link para conhecer sobre mim',
          description: "Olá esse é o meu portifolio venha, um desenvolvedor front-end apaixonado pela minha profissão. Me esforcei muito para aprender tudo que sei, veja mais sobre mim nesse link.",
          images: [
            {
              url: '../public/img/Profile-SEO.png',
              width: 800,
              height: 600,
              alt: 'Profile SEO',
              type: 'image/png',
            }
          ],
          siteName: 'Portifolio',
        }}
      />
      <Header />
      <Skills skillItens={skillItens} />
      <Education />
      <Project />
      <Footer />
    </>
  );
}
