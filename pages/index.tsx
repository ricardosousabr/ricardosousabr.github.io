import Menu from "../src/components/Molecules/Menu";
import Header from "../src/components/Molecules/Header";
import Skills from "../src/components/Molecules/Skills";

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
      <Menu />
      <Header />
      <Skills skillItens={skillItens} />
    </>
  );
}
