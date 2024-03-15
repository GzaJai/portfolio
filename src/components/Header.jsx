import React from 'react'

const Header = () => {
  return (
    <>
      <header className='mt-6'>
        <div className='w-[45%] mx-auto flex justify-between items-center gap-20'>
          <h1 className='font-bold text-3xl'>Gonzalo Jaime</h1>
          <nav className='flex list-none gap-6 text-lg font-bold'>
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
              <a href="" className='hover:text-orange-500 duration-150'>
                contact
              </a>
            </li>
          </nav>
        </div>
        </header>
        <hr className='w-1/2 mt-8 mx-auto border-gray-600' />
    </>
  )
}

export default Header