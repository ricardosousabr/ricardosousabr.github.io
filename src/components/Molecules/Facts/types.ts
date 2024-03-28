export interface IFacts {
  title: string;
  factsAbout: {
    id: number;
    fact: string;
  }[];
}