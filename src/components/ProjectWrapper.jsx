import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectWrapper = ({ projects }) => {
  return (
    <div className='flex flex-row flex-wrap w-[60%] justify-center items-center mx-auto'>
            {projects.map((project) => (
            <ProjectCard key={project.id} title={project.title} desc={project.description} img={project.image} url={project.url}></ProjectCard>
            ))}
    </div>
  )
}

export default ProjectWrapper