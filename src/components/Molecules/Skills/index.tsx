import Image from "next/image";
import Text from "../../Atoms/Text";
import Container from "../../Atoms/Container";
import { Wrapper, SkillStyle, BoxText, BoxTitle, BoxSkillSItems, BoxSkill } from "./styles";
import { skillsProps, } from "./types";

export default function Skills({ title, subtitle, technologies }: skillsProps) {

  return (
    <Wrapper>
      <Container>
        <SkillStyle>
          <BoxText>
            <BoxTitle>
              <Text color="white" fontSize="20px">{ title }</Text>
            </BoxTitle>
            <div>
              <Text color="white" fontSize="16px">{ subtitle }</Text>
            </div>
          </BoxText>
          <BoxSkillSItems>
            {
              technologies.map((technologie, index) => {
                return (
                  <BoxSkill key={index}>
                    <Image width={40} height={40} src={technologie.src} alt="" />
                    <Text color="white" fontSize="16px">{technologie.name}</Text>
                  </BoxSkill>
                )
              })
            }
        </BoxSkillSItems>
        </SkillStyle>
      </Container>
    </Wrapper>
  )
}