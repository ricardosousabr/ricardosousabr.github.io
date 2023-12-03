import Header from "../src/components/Molecules/Header";
import Skills from "../src/components/Molecules/Skills";
import Education from "../src/components/Molecules/Education";
import Footer from "../src/components/Molecules/Footer";

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
      <Header />
      <Skills skillItens={skillItens} />
      <Education />
      <Footer />
    </>
  );
}
