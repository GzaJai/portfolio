import React from 'react'

const ProjectCard = ({ title, desc, img, openModal }) => {

  return (
    <div
      onClick={openModal}
      className="
        w-full max-w-xs bg-[#707070] rounded-lg hover:bg-orange-500 hover:cursor-pointer duration-150 box-border p-5 flex flex-col items-center justify-between min-h-[280px]"
    >
      <img
        className="w-[85%] rounded-md mb-4"
        src={`https://raw.githubusercontent.com/GzaJai/portfolio/main/public/images/${img}.png`}
        alt=""
      />

      <h3 className="text-xl font-bold text-white text-center">{title}</h3>
      {/* <p className="text-white text-center text-sm">{desc}</p> */}
    </div>
  )
}

export default ProjectCard