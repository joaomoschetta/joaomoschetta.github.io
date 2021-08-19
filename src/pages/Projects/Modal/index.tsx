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

            <a href={project.demonstrationLink}>Demonstração</a>
            <a href={project.repositoryLink}>Repositório</a>
          </div>
        </section>

        <section className="about">
          {project.aboutParagraphs}
        </section>
      </div>

      <div className="back-container" />
    </div>
  );
}