import React from "react";

import { dataLinks } from '../../data/links';

import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.svg';
import mailIcon from '../../assets/mail.svg';

import './style.scss';

interface IContactLinks {
  name: string;
  image: string;
  titleAndAltText: string;
  link: string;
};

export function About() {
  const contactLinks : IContactLinks[] = [
    {
      name: 'github',
      image: githubIcon,
      titleAndAltText: 'Veja meu Github',
      link: dataLinks.github,
    },
    {
      name: 'linkedin',
      image: linkedinIcon,
      titleAndAltText: 'Veja meu Linkedin',
      link: dataLinks.linkedin,
    },
    {
      name: 'email',
      image: mailIcon,
      titleAndAltText: 'Me envie um email joaomoschetta@gmail.com',
      link: `mailto:${dataLinks.email}`,
    },
  ];

  return (
    <main className="about-page">
      <section className="titles-and-links">
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
      </section>

      <section className="about">
        <h3>SOBRE</h3>
        <p>Sempre fui apaixonado por tecnologia, tive meu primeiro contato com programação em 2018 e desde então nao parei de estudar. Sou auto-didata e atualmente me aventuro pelo desenvolvimento Web, buscando sempre mais experiencia para evoluir a cada dia.</p>
      </section>
    </main>
  );
}