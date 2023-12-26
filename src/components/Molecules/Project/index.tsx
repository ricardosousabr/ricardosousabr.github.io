import Image from "next/image";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import Container from "../../Atoms/Container";
import { Wrapper, ProjectStyle, BoxProjects, BoxProject, BoxImage, BoxImageMobile, BoxImageDesktop, BoxText } from "./styles";

export default function Project() {
  return (
    <Wrapper>
      <Container>
        <ProjectStyle>
          <BoxText>
            <Text color="white" fontSize="20px">Project</Text>
            <Text color="white" fontSize="16px">Look at some of my projects</Text>
          </BoxText>
          <BoxProjects>
            <BoxProject>
              <BoxImage>
                <BoxImageMobile>
                  <Image width={250} height={300} src="/img/Project-Login-Page-Mobile.png" alt="" />
                </BoxImageMobile>
                <BoxImageDesktop>
                  <Image width={350} height={250} src="/img/Project-Login-Page-Desktop.png" alt="" />
                </BoxImageDesktop>
              </BoxImage>
              <Button color="white" padding="0px" background="transparent" borderRadius="0px" border="none" fontSize="16px" textDecoration="none" href="https://ricardosousabr.github.io/login-page-next/">Login page next </Button>
            </BoxProject>
            <BoxProject>
              <BoxImage>
                <BoxImageMobile>
                  <Image width={250} height={300} src="/img/Project-Pokedex-Mobile.png" alt="" />
                </BoxImageMobile>
                <BoxImageDesktop>
                  <Image width={350} height={250} src="/img/Project-Pokedex-Desktop.png" alt="" />
                </BoxImageDesktop>
              </BoxImage>
              <Button color="white" padding="0px" background="transparent" borderRadius="0px" border="none" fontSize="16px" textDecoration="none" href="https://ricardosousabr.github.io/login-page-next/">Pokedex </Button>
            </BoxProject>
            <BoxProject>
              <BoxImage>
                <BoxImageMobile>
                  <Image width={250} height={300} src="/img/Project-Storybook-Mobile.png" alt="" />
                </BoxImageMobile>
                <BoxImageDesktop>
                  <Image width={350} height={250} src="/img/Project-Storybook-Desktop.png" alt="" />
                </BoxImageDesktop>
              </BoxImage>
              <Button color="white" padding="0px" background="transparent" borderRadius="0px" border="none" fontSize="16px" textDecoration="none" href="https://ricardosousabr.github.io/login-page-next/">Storybook </Button>
            </BoxProject>
          </BoxProjects>
        </ProjectStyle>
      </Container>
    </Wrapper>
  )
}