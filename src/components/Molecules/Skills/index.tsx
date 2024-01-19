import Image from "next/image";
import Text from "../../Atoms/Text";
import Title from "../../Atoms/Title";
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
              <Title>{ title }</Title>
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