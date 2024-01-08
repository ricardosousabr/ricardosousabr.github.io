import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import Container from "../../Atoms/Container";
import Image from "next/image";
import { IHeaderProps } from "./types";
import { Wrapper, HeaderStyle, BoxTitle, BoxInformation, BoxProfile, BoxText, BoxButton, BoxMessage, BoxImage } from "./styles";

export default function Header({title, subtitle, motovationalPhrase, image }: IHeaderProps ) {

  return (
    <Wrapper>
      <Container>
        <HeaderStyle>
          <BoxInformation>
            <BoxImage>
              <Image width={400} height={500} layout="responsive" src={ image } alt="" />
            </BoxImage>
            <BoxProfile>
              <BoxText>
                <BoxTitle>
                  <Text color="white" fontSize="30px">{ title }</Text>
                </BoxTitle>
                <div>
                  <Text color="#ABB2BF" fontSize="16px">{ subtitle }</Text>
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
              <Text color="white" fontSize="24px">{ motovationalPhrase }</Text>
            </BoxMessage>
          </div>
        </HeaderStyle>
      </Container>
    </Wrapper>
  )
}
