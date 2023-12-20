import Image from "next/image";
import Text from "../../Atoms/Text";
import { SkillStyle, BoxText, BoxTitle, BoxSkillSItems, BoxSkill } from "./style";
import { skillsProps, } from "./types";

export default function Skills({ skillItens }: skillsProps) {
  skillItens = [
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
    <SkillStyle>
      <BoxText>
        <BoxTitle>
          <Text color="white" fontSize="20px">Skills</Text>
        </BoxTitle>
        <div>
          <Text color="white" fontSize="16px">The skills, tools and technologies I am good at:</Text>
        </div>
      </BoxText>
      <BoxSkillSItems>
        {
          skillItens.map((skillItens, index) => {
            return (
              <BoxSkill key={index}>
                <Image width={40} height={40} src={"/img/"+skillItens+".png"} alt="" />
                <Text color="white" fontSize="16px">{skillItens}</Text>
              </BoxSkill>
            )
          })
        }
     </BoxSkillSItems>
    </SkillStyle>
  )
}