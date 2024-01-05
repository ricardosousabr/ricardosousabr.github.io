export interface IProjectProps {
  title: string;
  subtitle: string;
  projectsCreated: {
    name: string;
    srcMobile: string;
    srcDesktop: string;
  }[];
}