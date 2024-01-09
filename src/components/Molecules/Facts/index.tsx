import Text from "../../Atoms/Text";
import Container from "../../Atoms/Container";
import { IFacts } from "./types";
import { Wrapper, FactsStyle, BoxText, BoxFacts, BoxFact } from "./styles";

export default function Facts({title, factsAbout}: IFacts ) {
  return (
    <Wrapper>
      <Container>
        <FactsStyle>
          <BoxText>
            <Text color="white" fontSize="20px">{ title }</Text>
          </BoxText>
            <BoxFacts >
            {
              factsAbout.map((fact, index) => {
                return (
                  <BoxFact key={index}>
                      <Text color="#ABB2BF" fontSize="16px" >{fact}</Text>
                  </BoxFact>
                )
              })
            }
            </BoxFacts>
        </FactsStyle>
      </Container>
    </Wrapper>
  )
}