export interface IProjects {
  name: string;
  summary: string;
  tags: string[];
  image: string;
  showcaseVideoURL?: string;
  repositoryLink?: string;
  demonstrationLink?: string;
  aboutParagraphs: JSX.Element[];
}