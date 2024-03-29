import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectWrapper = ({ projects }) => {
  return (
    <div className='flex flex-row flex-wrap w-[80%] justify-center items-center mx-auto md:mb-52 md:p'>
            {projects.map((project) => (
            <ProjectCard key={project.id} title={project.title} desc={project.description} img={project.image} url={project.url}></ProjectCard>
            ))}
    </div>
  )
}

export default ProjectWrapper