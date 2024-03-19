import React from 'react'

const ProjectCard = ({ title, desc, img, url }) => {

  return (
      <a href={ url } target='_blank' className='w-[30rem] my-[2rem] mx-[2rem] bg-[#444] rounded-lg hover:bg-orange-500 hover:cursor-pointer duration-150 box-border p-5'>
        <div>
            <img className='w-[90%] mx-auto' src={`https://raw.githubusercontent.com/GzaJai/portfolio/main/public/images/${ img }.png`} alt="" />
            <h3 className='text-xl font-bold text-white'>{ title }</h3>
            <p className='text-white'>{ desc }</p>
        </div>
      </a>
  )
}

export default ProjectCard