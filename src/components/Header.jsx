import React from 'react'

const Header = () => {
  return (
    <>
      <header className='mt-6'>
        <div className='mx-5 flex justify-between items-center gap-20 max-sm:ml-[3rem] '>
          <h1 className='font-bold text-lg max-sm:text-3xl'>Gonzalo Jaime</h1>
          <nav className='flex list-none gap-3 text-md font-bold max-sm:hidden'>
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
        </div>
        </header>
        <hr className='w-1/2 mt-8 mx-auto border-gray-600 max-sm:w-[80%]' />
    </>
  )
}

export default Header