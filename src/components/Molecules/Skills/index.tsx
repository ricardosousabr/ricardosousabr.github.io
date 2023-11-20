import Text from "../../Atoms/Text"
import { SkillStyle, BoxText } from "./style"

export default function Skills() {
  return (
    <SkillStyle>
      <BoxText>
          <Text color="white" fontSize="20px">Skills</Text>
          <Text color="white" fontSize="16px">The skills, tools and technologies I am good at:</Text>
      </BoxText>
    </SkillStyle>
  )
}