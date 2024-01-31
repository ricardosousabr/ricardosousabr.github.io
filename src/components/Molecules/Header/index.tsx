import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import Container from "../../Atoms/Container";
import Image from "next/image";
import { IHeaderProps } from "./types";
import { Wrapper, HeaderStyle, BoxTitle, BoxInformation, BoxProfile, BoxText, BoxButton, BoxMessage, BoxImage, BoxSwitch, Switch, SwitchSpan } from "./styles";
import { FlagBrazil, FlagUS } from '@gympass/yoga-icons';
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header({ title, subtitle, motovationalPhrase, image }: IHeaderProps) {

  const [languageSelector, setLanguageSelector] = useState<boolean>(false);
  const router = useRouter();

  function controlSwitch() {
    setLanguageSelector(!languageSelector)
    if (languageSelector) {
      router.push("/pt-br")
    } else {
      router.push("/en-us")
    }

  }

  return (
    <Wrapper>
      <Container>
        <BoxSwitch>
          <Switch enabled={languageSelector} onClick={controlSwitch}>
            <SwitchSpan enabled={languageSelector}>
              {
                languageSelector ? <FlagUS width={30} height={30} /> : <FlagBrazil width={30} height={30} />
              }
            </SwitchSpan>
          </Switch>
        </BoxSwitch>
        <HeaderStyle>
          <BoxInformation>
            <BoxImage>
              <Image width={400} height={500} layout="responsive" src={ image } alt=""/>
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
                <Button href="#contatos">
                  Contate-me!!
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
