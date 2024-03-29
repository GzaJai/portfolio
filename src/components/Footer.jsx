import React from 'react'

const Footer = () => {
  return (
    <footer className='h-[13rem] mt-12 bg-orange-500 flex items-center justify-center text-[#333]'>
        <div className='w-[80%] flex items-center justify-around md:w-[60%]'>
            <h3 className='text-2xl font-bold md:text-4xl'>Gonzalo Jaime</h3>
            <ul className='flex gap-2 md:gap-10'>
                <li className='hover:bg-indigo-400 duration-150 p-4 rounded-full'>
                    <a href="https://github.com/GzaJai" target='_blank'>
                         <img src="https://raw.githubusercontent.com/GzaJai/portfolio/5704c51e4f75bc48335be4e7c54a4df0b2f2c722/public/logos/Github.svg" alt="Github logo" />
                    </a>
                </li>
                <li className='hover:bg-indigo-400 duration-150 p-4 rounded-full'>
                    <a href="https://www.linkedin.com/in/gjaimeguinazu/" target='_blank'>
                        <img src="https://raw.githubusercontent.com/GzaJai/portfolio/5704c51e4f75bc48335be4e7c54a4df0b2f2c722/public/logos/LinkedIn.svg" alt="LinkedIn logo" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer