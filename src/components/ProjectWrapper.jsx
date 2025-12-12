import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import InfoModal from './InfoModal';

const ProjectWrapper = ({ projects }) => {

  const [modalIsOpen, setIsOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState()

  
   
  const handleCloseModal = () => {
    setIsOpen(false)
  };
  const handleOpenModal = () => {
    setIsOpen(true)
  };

  const handleClickedProject = (project) => {
    setCurrentProject(project)
  };

  return (
    <>
      <div className="w-[90%] md:w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {projects.map((project) => (
          <div key={project.id} onClick={() => handleClickedProject(project)}>
            <ProjectCard
              title={project.title}
              desc={project.description}
              img={project.image}
              url={project.url}
              openModal={handleOpenModal}
            />
          </div>
        ))}

        <InfoModal
          closeFunc={handleCloseModal}
          isOpen={modalIsOpen}
          projectObject={currentProject}
        />
      </div>

    </>
  )
}

export default ProjectWrapper