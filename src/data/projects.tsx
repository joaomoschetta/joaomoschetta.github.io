import { dataLinks } from '../data/links';

import weatherAppImage from '../assets/data/weather-app-image.png';
import letmeaskImage from '../assets/data/letmeask.png';
import letmeaskVideo from '../assets/data/letmeask.mp4';
import extraUtilitiesImage from '../assets/data/personal-extra-utilities.png';
import extraUtilitiesVideo from '../assets/data/personal-extra-utilities.mp4';

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
const extraUtilitiesLinks = dataLinks.projects.extraUtilities;

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
  },
  {
    name: 'Personal Utilities',
    summary: 'Desenvolvido para sanar algumas necessidades pessoais: gerenciamento de tempo, temporizadores, pomodoro e anotações. Construído com Vue',
    tags: ['Vue', 'SCSS', 'Figma'],
    image: extraUtilitiesImage,
    showcaseVideo: extraUtilitiesVideo,
    repositoryLink: extraUtilitiesLinks.repo,
    aboutParagraphs: (
      <>
        <p>
          Esse foi o primeiro grande projeto que desenvolvi, a ideia partiu de uma <strong>necessidade própria</strong> de concentrar algumas funcionalidades, que eu utilizava com certa frequência, em um único local. 
        </p>
        <p>
          Foi desenvolvido com <strong>Vue e SCSS</strong>. Possui as seguintes funcionalidades:
        </p>
        <ul>
          <li>Temporizadores, um progressivo e outro regressivo</li>
          <li>Temporizador para a técnica Pomodoro</li>
          <li>Dois blocos de notas</li>
          <li>Lista de afazeres</li>
          <li>Planilha de gerenciamento de tempo</li>
        </ul>
        <p>
          A <strong>planilha de gerenciamento de tempo</strong> merece um maior detalhamento, foi a <strong>principal funcionalidade</strong> para me levar a criar essa aplicação, precisava salvar o tempo que estudei no dia, exemplo: 4 horas estudando Vue. Após enviar, os dados podem ser vistos na outra pagina da aplicação. Essas são as funcionalidades da planilha:
        </p>
        <ul>
          <li>Adicionar categoria</li>
          <li>Salvar: Mensagem, categoria e tempo</li>
          <li>Visualizar todos os dados salvos na planilha</li>
          <li>Ver a soma de tempo de todos os dados de determinada categoria</li>
        </ul>
        <p>
          Todos os dados da aplicação ficam salvo em local storage - nao utilizei um banco de dados pois não era uma necessidade e não era o foco de estudo quando foi desenvolvida. O design é próprio e foi desenvolvido com Figma.
        </p>
      </>
    )
  }
]