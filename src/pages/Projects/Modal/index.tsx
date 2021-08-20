import React from "react";

import { IProjects, projects } from '../../../data/projects';

import './style.scss';

export interface IProps {
  project: IProjects;
  isActive: boolean;
  setIsActive: Function;
}

export function Modal({
  project,
  isActive,
  setIsActive,
} : IProps) {

  function closeModal() {
    setIsActive(false);
  }
  
  return (
    <div className="modal-component">
      <div className="modal">
        <button onClick={closeModal}>
          <span className="bar" />
          <span className="bar" />
        </button>

        <section className="top-row">
          {project.showcaseVideoURL ? (
            <video>
              <source src={project.showcaseVideoURL} />
            </video>
          ) : (
            <img src={project.image} alt={`${project.name} showcase`} />
          )}

          <div className="right-column">
            <h3>{project.name}</h3>

            <ul>
              {project.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>

          </div>
        </section>

        <section className="about">
          {project.aboutParagraphs}
        </section>

        <section className="buttons">
          <a
            href={project.repositoryLink}
            target="_blank"
            rel="noreferrer nofollow noopener external"
          >Repositório</a>
          <a
            href={project.demonstrationLink}
            target="_blank"
            rel="noreferrer nofollow noopener external"
          >Demonstração</a>
        </section>
      </div>

      <div 
        className="back-container"
        onClick={() => setIsActive(false)}
      />
    </div>
  );
}