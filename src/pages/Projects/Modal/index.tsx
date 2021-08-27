import React from "react";

import { IProjects } from '../../../data/projects';

import './style.scss';

export interface IProps {
  project: IProjects;
  setIsActive: Function;
}

export function Modal({ project, setIsActive } : IProps) {
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
          {project.showcaseVideo ? (
            <video
              autoPlay
              controls
              loop
            >
              <source src={project.showcaseVideo} />
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
          <button
            disabled={project.repositoryLink ? false : true}
          >
            <a
              href={project.repositoryLink}
              target="_blank"
              rel="noreferrer nofollow noopener external"
            >
              Repositório
            </a>
          </button>
          <button
            disabled={project.demonstrationLink ? false : true}
          >
            <a
              href={project.demonstrationLink}
              target="_blank"
              rel="noreferrer nofollow noopener external"
            >
              Demonstração
            </a>
          </button>
        </section>
      </div>

      <div
        className="back-container"
        onClick={closeModal}
      />
    </div>
  );
}