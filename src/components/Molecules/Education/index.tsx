import Text from "../../Atoms/Text";
import Container from "../../Atoms/Container";
import { IEducationProps } from "./types";
import { EducationStyle, Wrapper, BoxText, BoxTitle, BoxTextInformation } from "./styles";

export default function Education({ title, subtitle, faculty, course, state }:IEducationProps) {
  return (
    <Wrapper>
      <Container>
        <EducationStyle>
          <BoxText>
            <BoxTitle>
              <Text color="white" fontSize="20px">{ title }</Text>
            </BoxTitle>
            <div>
              <Text color="white" fontSize="16px">{ subtitle }</Text>
            </div>
          </BoxText>
          <BoxTextInformation>
            <Text color="#66BEF5" fontSize="16px">{ faculty }</Text>
            <Text color="white" fontSize="16px">{ course }</Text>
            <Text color="white" fontSize="16px">{ state }</Text>
          </BoxTextInformation>
        </EducationStyle>
      </Container>
    </Wrapper>
  )
}
