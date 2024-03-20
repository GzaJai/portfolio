import React from 'react'

const Hero = () => {
  return (
    <>
        <div className='md:mb-32'>
          <h2 className='font-bold text-4xl text-indigo-400 mb-8 max-sm:text-3xl md:mb-24'>Full-Stack Developer</h2>
          <p className='text-2xl font-bold w-[80%] mb-6'>
            Hi there!
          </p>
          <p className='text-lg font-semibold text-pretty w-[90%]'>
            I'm Gonzalo Jaime, a software development student.  
          </p>
        </div>
        <img className='bg-indigo-400 p-4 rounded-full' src="https://raw.githubusercontent.com/GzaJai/portfolio/main/public/images/yo-portfolio.png" alt="" />
    </>
  )
}

export default Hero