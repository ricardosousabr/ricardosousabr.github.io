import Text from "../../Atoms/Text";
import { EducationStyle, BoxText, BoxTextInformation } from "./style";

export default function Education() {
  return (
    <EducationStyle>
      <BoxText>
        <Text color="white" fontSize="20px">Education</Text>
        <Text color="white" fontSize="16px">These are my qualifications</Text>
      </BoxText>
      <BoxTextInformation>
        <Text color="#66BEF5" fontSize="16px">Uninassau</Text>
        <Text color="white" fontSize="16px">Analise e desenvolvimento de sistemas</Text>
        <Text color="white" fontSize="16px">State: Cursando</Text>
      </BoxTextInformation>
    </EducationStyle>
  )
}
