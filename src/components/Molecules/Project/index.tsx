import Image from "next/image";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import Container from "../../Atoms/Container";
import Card from "../../Atoms/Card";
import { IProjectProps } from "./types";
import { Wrapper, ProjectStyle, BoxProjects, BoxImage, BoxImageMobile, BoxImageDesktop, BoxTitle, Title, BoxText, BoxTechnologies, BoxTechnologie, BoxButton } from "./styles";

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
                  <Card key={index} link={project.link} srcImageMobile={project.srcMobile} srcImageDesktop={project.srcDesktop} title={project.name} texts={project.technologies} />
                )
              })
            }
          </BoxProjects>
          <BoxButton>
            <Button href="https://github.com/ricardosousabr">
              Ver mais
            </Button>
          </BoxButton>
        </ProjectStyle>
      </Container>
    </Wrapper>
  )
}