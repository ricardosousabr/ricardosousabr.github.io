import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import Container from "../../Atoms/Container";
import Image from "next/image";
import { IHeaderProps } from "./types";
import { Wrapper, HeaderStyle, BoxTitle, BoxInformation, BoxProfile, BoxText, BoxButton, BoxMessage, BoxImage, BoxSwitch, Switch, SwitchSpan } from "./styles";
import { FlagBrazil, FlagUS } from '@gympass/yoga-icons';
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header({ title, subtitle, motovationalPhrase, image, button }: IHeaderProps) {

  const [languageSelector, setLanguageSelector] = useState<boolean>(true);
  const router = useRouter();
  const [apiData, setApidata] = useState({});

  async function getData() {
    const response = await fetch("http://localhost:1337/api/seo");
    const data = await response.json();
    setApidata(data)
  }

  function controlSwitch() {
    setLanguageSelector(!languageSelector)
    if (languageSelector) {
      router.push("/en-us")
    } else {
      router.push("/pt-br")
    }
  }

  //getData()
  //console.log(apiData)
  return (
    <Wrapper>
      <Container>
        <BoxSwitch>
          <Switch enabled={languageSelector} onClick={controlSwitch}>
            {
              languageSelector ?
            <div>
              <SwitchSpan enabled={languageSelector}>
                  <FlagBrazil width={30} height={30} />
              </SwitchSpan>
              <SwitchSpan enabled={languageSelector}>
                <svg width="30" height="30" viewBox="0 0 12 12" fill="#808080" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_23259_161472)"><path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="white"></path><path d="M5.73926 5.99992H12.0001C12.0001 5.45837 11.9279 4.93375 11.7934 4.43469H5.73926V5.99992Z" fill="#808080"></path><path d="M5.73926 2.86955H11.1195C10.7522 2.2702 10.2826 1.74045 9.73502 1.30432H5.73926V2.86955Z" fill="#808080"></path><path d="M6.00004 12C7.41213 12 8.71003 11.512 9.73495 10.6957H2.26514C3.29006 11.512 4.58796 12 6.00004 12Z" fill="#808080"></path><path d="M0.880732 9.13041H11.1194C11.4143 8.64927 11.643 8.12333 11.7934 7.56519H0.206787C0.357186 8.12333 0.585865 8.64927 0.880732 9.13041V9.13041Z" fill="#808080"></path><path d="M2.77931 0.936984H3.32609L2.81749 1.30648L3.01177 1.90434L2.5032 1.53485L1.99463 1.90434L2.16244 1.38785C1.71464 1.76086 1.32216 2.19788 0.998719 2.68481H1.17391L0.850172 2.92001C0.799734 3.00415 0.751359 3.08963 0.705 3.17637L0.859594 3.65217L0.571172 3.44262C0.499477 3.59452 0.433899 3.74984 0.374953 3.90839L0.545274 4.43264H1.17391L0.66532 4.80213L0.859594 5.4L0.351023 5.03051L0.0463828 5.25185C0.0158906 5.49696 0 5.74662 0 6H6C6 2.68631 6 2.29566 6 0C4.81472 0 3.70981 0.343828 2.77931 0.936984V0.936984ZM3.01177 5.4L2.5032 5.03051L1.99463 5.4L2.1889 4.80213L1.6803 4.43264H2.30895L2.5032 3.83477L2.69745 4.43264H3.32609L2.81749 4.80213L3.01177 5.4ZM2.81749 3.0543L3.01177 3.65217L2.5032 3.28268L1.99463 3.65217L2.1889 3.0543L1.6803 2.68481H2.30895L2.5032 2.08695L2.69745 2.68481H3.32609L2.81749 3.0543ZM5.16394 5.4L4.65537 5.03051L4.1468 5.4L4.34107 4.80213L3.83248 4.43264H4.46112L4.65537 3.83477L4.84962 4.43264H5.47826L4.96966 4.80213L5.16394 5.4ZM4.96966 3.0543L5.16394 3.65217L4.65537 3.28268L4.1468 3.65217L4.34107 3.0543L3.83248 2.68481H4.46112L4.65537 2.08695L4.84962 2.68481H5.47826L4.96966 3.0543ZM4.96966 1.30648L5.16394 1.90434L4.65537 1.53485L4.1468 1.90434L4.34107 1.30648L3.83248 0.936984H4.46112L4.65537 0.339117L4.84962 0.936984H5.47826L4.96966 1.30648Z" fill="#808080"></path></g><defs><clipPath id="clip0_23259_161472"><rect width="12" height="12" fill="white"></rect></clipPath></defs></svg>
              </SwitchSpan>
            </div> :
              <div>
                <SwitchSpan enabled={languageSelector}>
                  <svg width="30" height="30" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_23259_161542)"><path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#A1A5A7"></path><path d="M5.99997 2.34778L10.9565 5.99995L5.99997 9.65212L1.04346 5.99995L5.99997 2.34778Z" fill="#E4E4E4"></path><path d="M6.00003 8.08698C7.15262 8.08698 8.08698 7.15262 8.08698 6.00003C8.08698 4.84744 7.15262 3.91309 6.00003 3.91309C4.84744 3.91309 3.91309 4.84744 3.91309 6.00003C3.91309 7.15262 4.84744 8.08698 6.00003 8.08698Z" fill="#FFFFFF"></path><path d="M4.95638 5.86963C4.59347 5.86963 4.24325 5.92482 3.91357 6.02725C3.92818 7.16725 4.85639 8.08703 5.99986 8.08703C6.70693 8.08703 7.33139 7.73507 7.7089 7.19715C7.06304 6.38863 6.06926 5.86963 4.95638 5.86963V5.86963Z" fill="#6A696E"></path><path d="M8.04808 6.39987C8.0732 6.27041 8.08677 6.13684 8.08677 6.00003C8.08677 4.84742 7.15241 3.91309 5.99983 3.91309C5.13981 3.91309 4.40153 4.43342 4.08203 5.17634C4.36445 5.11782 4.65686 5.087 4.95637 5.087C6.16848 5.08698 7.26503 5.59084 8.04808 6.39987V6.39987Z" fill="#6A696E"></path></g><defs><clipPath id="clip0_23259_161542"><rect width="12" height="12" fill="white"></rect></clipPath></defs></svg>
                  </SwitchSpan>
                <SwitchSpan enabled={languageSelector}>
                    <FlagUS width={30} height={30} />
                </SwitchSpan>

              </div>
            }

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
                  { button }
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
