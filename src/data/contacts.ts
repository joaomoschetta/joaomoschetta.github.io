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
    link: 'mailto:joaomoschetta@gmail.com',
  },
  {
    id: 1,
    title: 'Veja meu Github',
    icon: githubIcon,
    link: 'https://github.com/joaomoschetta',
  },
  {
    id: 2,
    title: 'Veja meu Linkedin',
    icon: linkedinIcon,
    link: 'https://www.linkedin.com/in/jo%C3%A3o-moschetta-896ba3180/',
  },
  {
    id: 3,
    title: 'Ou me contate via celular',
    link: 'https://api.whatsapp.com/send?phone=5549988723112',
    text: 'De preferencia ao contato via email, caso nao seja possível, estou disponível no período da tarde (segunda a segunda) para ligação, ou mensagem via Whatsapp',
    adicionalTitle: '+55 49 9 88723112',
  },
];
console.log(contacts[0]);