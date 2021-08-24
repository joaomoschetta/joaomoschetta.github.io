import { dataLinks } from './links';

import mailIcon from '../assets/mail.svg';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.svg';

console.log(mailIcon);
export interface IContacts {
  id: number;
  title: string;
  link: string;
  icon?: string;
  text?: string;
  adicionalTitle?: string;
}

export const contacts : IContacts[] = [
  {
    id: 0,
    title: 'Me envie um email',
    icon: mailIcon,
    link: `mailto:${dataLinks.email}`,
  },
  {
    id: 1,
    title: 'Veja meu Github',
    icon: githubIcon,
    link: dataLinks.github,
  },
  {
    id: 2,
    title: 'Veja meu Linkedin',
    icon: linkedinIcon,
    link: dataLinks.linkedin,
  },
  {
    id: 3,
    title: 'Ou me contate via celular',
    link: dataLinks.whatsappApiSendMessage,
    text: 'Dê preferencia ao contato via email, caso nao seja possível, estou disponível no período da tarde (segunda a segunda) para ligação, ou mensagem via Whatsapp',
    adicionalTitle: '+55 49 9 88723112',
  },
];
console.log(contacts[0]);