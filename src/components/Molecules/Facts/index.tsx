import Text from "../../Atoms/Text";
import Container from "../../Atoms/Container";
import { IFacts } from "./types";
import { Wrapper, FactsStyle, BoxText, BoxFacts, BoxFact } from "./styles";
import Title from "../../Atoms/Title";

export default function Facts({title, factsAbout}: IFacts ) {
  return (
    <Wrapper>
      <Container>
        <FactsStyle>
          <BoxText>
            <Title >{ title }</Title>
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