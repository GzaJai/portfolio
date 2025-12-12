import React from 'react'

const Header = () => {
  return (
    <>
      <header className='pt-6 mb-8 sticky top-0 bg-[#d9d9d9]'>
        <div className='mx-10 flex justify-between items-center gap-20 max-sm:ml-[3rem] md:w-[45%] md:mx-auto '>
          <a href='#' className='font-bold text-lg md:text-3xl'>Gonzalo Jaime</a>
          <nav className='flex list-none gap-6 text-xl font-bold max-sm:hidden'>
            <li>
              <a href="#about-me" className='hover:text-orange-500 duration-150'>
                about me
              </a>
            </li>
            <li>
              <a href="#projects" className='hover:text-orange-500 duration-150'>
                projects
              </a>
            </li>
            <li>
              <a href="#contact" className='hover:text-orange-500 duration-150'>
                contact
              </a>
            </li>
          </nav>
          <img className='w-[4rem] bg-indigo-400 p-1 rounded-full md:hidden' src="https://raw.githubusercontent.com/GzaJai/portfolio/main/public/images/yo-portfolio.png" alt="" />
        </div>
        <hr className='w-[40%] mx-auto border-gray-600 max-sm:w-[80%] mt-8' />
        </header>
    </>
  )
}

export default Header