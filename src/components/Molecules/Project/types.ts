export interface IProjectProps {
  title: string;
  subtitle: string;
  button: string;
  Projects: {
    name: string;
    link: string;
    srcMobile: string;
    srcDesktop: string;
    ProjectTechnologie: {
      nameTechnologie: string
    }[];
  }[];
}