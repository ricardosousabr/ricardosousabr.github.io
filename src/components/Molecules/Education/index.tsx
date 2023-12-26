import Text from "../../Atoms/Text";
import Container from "../../Atoms/Container";
import { EducationStyle, Wrapper, BoxText, BoxTitle, BoxTextInformation } from "./styles";

export default function Education() {
  return (
    <Wrapper>
      <Container>
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
      </Container>
    </Wrapper>
  )
}
