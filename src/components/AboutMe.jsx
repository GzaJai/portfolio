import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex flex-col w-[40%] mb-40 text-[#333] items-center mx-auto'>
        <div className=''>
            <div className='w-[100%] font-medium text-lg'>
                <p>Hello, I'm Gonzalo Jaime. A full-stack developer from Argentina. </p>
                <p>Currently I'm studying at the University, but I have done some development courses that give me a pretty solid stack.</p>
                <p>I got some experience as a freelancer as well. I've done some projects for myself to improve and reinforce my skills, and some other to sell.</p>
            </div>
            <div className='flex gap-[2rem]'>
                <div className='w-[6rem] mt-12 p-4 flex flex-col bg-indigo-300 rounded-lg text-center'>
                    <h4 className='text-lg font-semibold'>Front-end skills</h4>
                    <div className='flex flex-col mt-2'>
                        <img src="/skills/javascript.svg" alt="" />
                        <img src="/skills/reactjs.svg" alt="" />
                        <img src="/skills/nextjs.svg" alt="" />
                        <img src="/skills/tailwindcss.svg" alt="" />
                        <img src="/skills/bootstrap.svg" alt="" />
                    </div>
                </div>
                <div className='w-[6rem] mt-12 p-4 flex flex-col bg-indigo-300 rounded-lg text-center'>
                    <h4 className='text-lg font-semibold'>Back-end skills</h4>
                    <div className='flex flex-col mt-2'>
                        <img src="/skills/python.svg" alt="" />
                        <img src="/skills/django.svg" alt="" />
                        <img src="/skills/nodejs.svg" alt="" />
                    </div>

                </div>
            </div>
        </div>
        <a className='box-content p-3 w-[50%] mt-[3rem] bg-indigo-500 hover:bg-orange-500 duration-150 flex flex-col items-center justify-center rounded-lg text-white' href="https://drive.google.com/file/d/1D3soKZYe1209oMMfySGhf3czffn0tLLO/view?usp=sharing" target='_blank'>
            <div>
                <p className='font-bold w-fit mx-auto text-center mb-3'>Check out my</p>
                    <img src="https://raw.githubusercontent.com/GzaJai/portfolio/18029456ed30cd57844e1d5d8721140c2479e090/public/images/Cv.svg" alt="" />
                <p className='font-bold w-fit mx-auto max-sm:hidden'>for more info</p>
            </div>
        </a>
    </div>
  )
}

export default AboutMe