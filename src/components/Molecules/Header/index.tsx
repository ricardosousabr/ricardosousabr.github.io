import Text from "../../Atoms/Text";
import ImageProfile from "./components/ImageProfile";
import Button from "../../Atoms/Button";
import Container from "../../Atoms/Container";
import { Wrapper, HeaderStyle, BoxTitle, BoxInformation, BoxProfile, BoxText, BoxButton, BoxMessage } from "./styles";

export default function Header() {

  return (
    <Wrapper>
      <Container>
        <HeaderStyle>
          <BoxInformation>
            <ImageProfile />
            <BoxProfile>
              <BoxText>
                <BoxTitle>
                  <Text color="white" fontSize="30px">Ricardo is a and front-end developer</Text>
                </BoxTitle>
                <div>
                  <Text color="#ABB2BF" fontSize="16px">He crafts responsive websites where technologies meet creativity</Text>
                </div>
              </BoxText>
              <BoxButton>
                <Button href="" background="transparent" padding="8px 16px" borderRadius="0px" color="white" border="1px solid #bb74ce" fontSize="16px" textDecoration="none">
                  Contact me!!
                </Button>
              </BoxButton>
            </BoxProfile>
          </BoxInformation>
          <div>
            <BoxMessage>
              <Text color="white" fontSize="24px">“O importante é não parar de questionar; a curiosidade tem sua própria razão de existir” - Albert Einstein</Text>
            </BoxMessage>
          </div>
        </HeaderStyle>
      </Container>
    </Wrapper>
  )
}
