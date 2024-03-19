import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex w-[50%] mx-auto mb-72 text-[#333] items-start'>
        <div className=''>
            <div className='w-[80%] ml-16 font-medium text-lg'>
                <p>Hello, I'm Gonzalo Jaime. A full-stack developer from Argentina. </p>
                <p>Currently I'm studying at the University, but I have done some development courses that give me a pretty solid stack.</p>
                <p>I got some experience as a freelancer as well. I've done some projects for myself to improve and reinforce my skills, and some other to sell.</p>
            </div>
            <div className='flex'>
                <div className='w-fit ml-16 mt-28 p-4 flex flex-col bg-indigo-300 rounded-lg'>
                    <h4 className='text-lg font-semibold'>Front-end skills</h4>
                    <div className='flex mt-2'>
                        <img src="/skills/javascript.svg" alt="" />
                        <img src="/skills/reactjs.svg" alt="" />
                        <img src="/skills/nextjs.svg" alt="" />
                        <img src="/skills/tailwindcss.svg" alt="" />
                        <img src="/skills/bootstrap.svg" alt="" />
                    </div>
                </div>
                <div className='w-fit ml-16 mt-28 p-4 flex flex-col bg-indigo-300 rounded-lg'>
                    <h4 className='text-lg font-semibold'>Back-end skills</h4>
                    <div className='flex mt-2'>
                        <img src="/skills/python.svg" alt="" />
                        <img src="/skills/django.svg" alt="" />
                        <img src="/skills/nodejs.svg" alt="" />
                    </div>

                </div>
            </div>
        </div>
        <a className='box-content p-3 w-[30%] h-fit bg-indigo-500 hover:bg-orange-500 duration-150 flex flex-col items-center justify-center rounded-lg text-white' href="https://drive.google.com/file/d/1D3soKZYe1209oMMfySGhf3czffn0tLLO/view?usp=sharing" target='_blank'>
            <div>
                <p className='font-bold w-fit mx-auto'>Check out my</p>
                    <img src="https://github.com/GzaJai/portfolio/blob/main/public/images/Cv.svg" alt="" />
                <p className='font-bold w-fit mx-auto'>for more info</p>
            </div>
        </a>
    </div>
  )
}

export default AboutMe