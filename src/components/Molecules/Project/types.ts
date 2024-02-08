export interface IProjectProps {
  title: string;
  subtitle: string;
  button: string;
  projectsCreated: {
    name: string;
    link: string;
    srcMobile: string;
    srcDesktop: string;
    technologies: string[];
  }[];
}