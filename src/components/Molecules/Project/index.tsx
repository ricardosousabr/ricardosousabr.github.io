import Image from "next/image";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import Container from "../../Atoms/Container";
import { IProjectProps } from "./types";
import { Wrapper, ProjectStyle, BoxProjects, BoxImage, BoxImageMobile, BoxImageDesktop, BoxTitle, Title, BoxText, BoxTechnologies, BoxTechnologie } from "./styles";

export default function Project({ title, subtitle, projectsCreated }:IProjectProps) {
  return (
    <Wrapper>
      <Container>
        <ProjectStyle>
          <BoxTitle>
            <Title>
              <Text color="white" fontSize="20px">{ title }</Text>
            </Title>
            <div>
              <Text color="white" fontSize="16px">{ subtitle }</Text>
            </div>
          </BoxTitle>
          <BoxProjects>
              {
                projectsCreated.map((project, index) => {

                  return (
                    <Button href={project.link} background="transparent" margin="20px" padding="0px" borderRadius="0px" color="white" border="1px solid #ABB2BF" fontSize="16px" textDecoration="none" key={index}>
                      <BoxImage>
                        <BoxImageMobile>
                          <Image width={250} height={300} src={project.srcMobile} alt="" />
                        </BoxImageMobile>
                        <BoxImageDesktop>
                          <Image width={350} height={250} src={project.srcDesktop} alt="" />
                        </BoxImageDesktop>
                      </BoxImage>
                      <BoxTechnologies>
                        {
                          project.technologies.map((technology, index) => {

                            return (
                              <BoxTechnologie key={index}>
                                <Text color="#ABB2BF" fontSize="16px">{technology}</Text>
                              </BoxTechnologie>
                            )
                          })
                        }
                      </BoxTechnologies>
                      <BoxText>
                        <Text color="white" fontSize="16px">{ project.name }</Text>
                      </BoxText>
                    </Button>
                  )
                })
              }
          </BoxProjects>
        </ProjectStyle>
      </Container>
    </Wrapper>
  )
}