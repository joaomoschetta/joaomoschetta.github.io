import { dataLinks } from '../data/links';

import weatherAppImage from '../assets/data/weather-app-image.png';
import letmeaskImage from '../assets/data/letmeask.png';
import letmeaskVideo from '../assets/data/letmeask.mp4';

export interface IProjects {
  name: string;
  summary: string;
  tags: string[];
  image: string;
  showcaseVideo?: string;
  repositoryLink?: string;
  demonstrationLink?: string;
  aboutParagraphs: JSX.Element;
}

const weatherAppLinks = dataLinks.projects.weatherApp;
const letmeaskLinks = dataLinks.projects.letmeask;

export const projects : IProjects[] = [
  {
    name: 'Weather app',
    summary: 'Aplicação para obter o clima e a previsão do tempo na sua região no momento atual. Construído com React',
    tags: ['React', 'Typescript', 'TDD', 'SCSS', 'Testes automatizados', 'Jest', 'API', 'React-testing-library', 'Axios', 'Figma'],
    image: weatherAppImage,
    repositoryLink: weatherAppLinks.repo,
    demonstrationLink: weatherAppLinks.demo,
    aboutParagraphs: (
      <>
        <p>
          Projeto desenvolvido para aprimorar conhecimento prático com <strong>React, Typescript, testes automatizados e integração com API.</strong> A aplicação consome a API weatherapi.com utilizando Axios. Se baseia na localização atual do usuário para fornecer as seguintes informações:
        </p>
        <ul>
          <li>Temperatura e condição climática atual</li>
          <li>Mínima e máxima do dia</li>
          <li>Previsão do tempo dos próximos 3 dias</li>
          <li>Previsão de tempo e temperatura das próximas 24 horas</li>
        </ul>
        <p>
          Design <strong>responsivo</strong> e próprio feito na plataforma <strong>Figma</strong>. Os componentes foram <strong>desenvolvidos utilizando TDD</strong>, testados com react-testing-library e Jest.
        </p>
      </>
    )
  },
  {
    name: 'Letmeask',
    summary: 'Plataforma de Q&A (pergunta e resposta) em tempo real. Construído com React e Google Firebase',
    tags: ['React', 'Typescript', 'Firebase', 'SCSS'],
    image: letmeaskImage,
    showcaseVideo: letmeaskVideo,
    repositoryLink: letmeaskLinks.repo,
    demonstrationLink: letmeaskLinks.demo,
    aboutParagraphs: (
      <>
        <p>
          Aplicação desenvolvida com <strong>React e Typescript</strong>, utiliza como banco de dados o serviço 'Realtime Database' e 'Authentication' para autentificar o usuário com sua conta Google, ambos os <strong>serviços fornecidos pelo Google Firebase.</strong> Esse projeto foi feito durante a NLW-06 (curso intensivo de 1 semana) fornecido pela empresa <a target="_blank" rel="noreferrer nofollow noopener external" href="https://rocketseat.com.br/">Rocketseat</a> - se quiser saber um pouco mais sobre minha visão em relação à cursos veja o meu <a target="_blank" rel="noreferrer nofollow noopener external" href="https://www.linkedin.com/posts/joaomoschetta_tecnologia-activity-6835724403548934144-qo2W">post no Linkedin</a>.
        </p>
        <p>
          Se trata de uma aplicação Q&amp;A (pergunta e resposta) em tempo real, possui as seguintes funcionalidades:
        </p>
        <ul>
          <li>Login com conta Google</li>
          <li>Criar e entrar em sala</li>
          <li>Envio de pergunta</li>
          <li>Adicionar gostei em perguntas</li>
          <li>Destacar e marcar pergunta como respondida</li>
          <li>Deletar pergunta</li>
          <li>Fechar sala</li>
        </ul>
      </>
    ),
  }
]