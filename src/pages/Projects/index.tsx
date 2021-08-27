import React from "react";
import { useState } from "react";

import { projects, IProjects } from '../../data/projects';
import { Modal } from './Modal/index';

import './style.scss';

export function Projects() {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [modalProject, setModalProject] = useState<IProjects>(projects[0]);

  function handleOpenModal(project : IProjects) {
    setModalProject(project);
    setIsModalActive(true);
  }

  return (
    <main className="projects-page">
      <h3>PROJETOS</h3>

      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <img src={project.image} alt={`${project.name} showcase`} />
            <div className="about">
              <strong>{project.name}</strong>
              <p>{project.summary}</p>
              <button onClick={() => handleOpenModal(project)}>
                Mais detalhes
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isModalActive && (
        <Modal
          project={modalProject}
          setIsActive={setIsModalActive}
        />
      )}
    </main>
  );
}