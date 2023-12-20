import Text from "../../Atoms/Text";
import { EducationStyle, BoxText, BoxTitle, BoxTextInformation } from "./style";

export default function Education() {
  return (
    <EducationStyle>
      <BoxText>
        <BoxTitle>
          <Text color="white" fontSize="20px">Education</Text>
        </BoxTitle>
        <div>
          <Text color="white" fontSize="16px">These are my qualifications</Text>
        </div>
      </BoxText>
      <BoxTextInformation>
        <Text color="#66BEF5" fontSize="16px">Uninassau</Text>
        <Text color="white" fontSize="16px">Analise e desenvolvimento de sistemas</Text>
        <Text color="white" fontSize="16px">State: Cursando</Text>
      </BoxTextInformation>
    </EducationStyle>
  )
}
