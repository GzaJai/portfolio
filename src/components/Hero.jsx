import React from 'react'

const Hero = ({ desc }) => {
  return (
    <>
        <div>
          <h2 className='font-bold text-4xl text-indigo-400 mb-8 max-sm:text-3xl md:mb-52'>Full-Stack Developer</h2>
          {<p className='text-xl font-semibold w-[80%]'> { desc} </p>}
        </div>
        <img className='w-[300px] bg-indigo-400 p-4 rounded-full' src="https://raw.githubusercontent.com/GzaJai/portfolio/main/public/images/yo-portfolio.png" alt="" />
    </>
  )
}

export default Hero