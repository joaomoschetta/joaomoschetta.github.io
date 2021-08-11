import React from "react";

import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.svg';
import mailIcon from '../../assets/mail.svg';

// import './style.scss';

interface IContactLinks {
  name: string;
  image: string;
  titleAndAltText: string;
  link: string;
};

export function About() {
  const contactLinks : Array<IContactLinks> = [
    {
      name: 'github',
      image: githubIcon,
      titleAndAltText: 'Veja meu Github',
      link: 'https://github.com/joaomoschetta',
    },
    {
      name: 'linkedin',
      image: linkedinIcon,
      titleAndAltText: 'Veja meu Linkedin',
      link: 'https://www.linkedin.com/in/jo%C3%A3o-moschetta-896ba3180/',
    },
    {
      name: 'email',
      image: mailIcon,
      titleAndAltText: 'Me envie um email joaomoschetta@gmail.com',
      link: 'mailto:joaomoschetta@gmail.com',
    },
  ];

  return (
    <div className="about-page">
      <main>
        <h1>João Moschetta</h1>
        <h2>Desenvolvedor Front-end</h2>
        <ul>
          {contactLinks.map((contactLink, index) => {
            return (
              <li key={index} className={contactLink.name}>
                <a
                  href={contactLink.link}
                  target="_blank"
                  rel="noreferrer nofollow noopener external"
                >
                  <img
                    src={contactLink.image}
                    alt={contactLink.titleAndAltText}
                    title={contactLink.titleAndAltText}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <section className="about">
          <h3>SOBRE</h3>
          <p>Sempre fui apaixonado por tecnologia, tive meu primeiro contato com programação em 2018 e desde então nao parei de estudar. Sou auto-didata e atualmente me aventuro pelo desenvolvimento Web, buscando sempre mais experiencia para evoluir a cada dia.</p>
        </section>
      </main>
    </div>
  );
}