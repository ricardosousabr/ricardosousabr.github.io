import Image from "next/image";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import Container from "../../Atoms/Container";
import { IProjectProps } from "./types";
import { Wrapper, ProjectStyle, BoxProjects, BoxProject, BoxImage, BoxImageMobile, BoxImageDesktop, BoxText } from "./styles";

export default function Project({ title, subtitle, projectsCreated }:IProjectProps) {
  return (
    <Wrapper>
      <Container>
        <ProjectStyle>
          <BoxText>
            <Text color="white" fontSize="20px">{ title }</Text>
            <Text color="white" fontSize="16px">{ subtitle }</Text>
          </BoxText>
          <BoxProjects>
              {
                projectsCreated.map((project, index) => {

                  return (
                    <BoxProject key={index}>
                      <Button color="white" padding="0px" background="transparent" borderRadius="0px" border="none" fontSize="16px" textDecoration="none" href="https://ricardosousabr.github.io/login-page-next/">
                        <BoxImage>
                          <BoxImageMobile>
                            <Image width={250} height={300} src={project.srcMobile} alt="" />
                          </BoxImageMobile>
                          <BoxImageDesktop>
                            <Image width={350} height={250} src={project.srcDesktop} alt="" />
                          </BoxImageDesktop>
                        </BoxImage>
                        <Text color="white" fontSize="16px">{project.name}</Text>
                      </Button>
                    </BoxProject>
                  )
                })
              }
          </BoxProjects>
        </ProjectStyle>
      </Container>
    </Wrapper>
  )
}