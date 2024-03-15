import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'

import dataFromJson from './data.json'
import ProjectWrapper from './components/ProjectWrapper'
import Hero from './components/Hero'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState("")
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setData(dataFromJson[0])
    if (data) {
      console.log(data);
    }
    setProjects(dataFromJson[1].projects)
    if (projects) {
      console.log(projects[0]);
    }
  },)
  

  return (
    <>
      <Header></Header>
      <section className='w-[50%] my-[12%] mx-auto flex items-center justify-around '>
        <Hero desc={data.description }></Hero>
      </section>
      {/* <img src={ cv } alt="" /> */}
      <section id='about-me'>
        <h3 className='w-[50%] mx-auto mb-7 font-bold text-3xl'>About me</h3>
        <p className='w-[50%] mx-auto mb-24 font-medium text-lg text-indigo-400'>who i am? <span className='text-xs'>(seriously who i am?)</span></p>
        <AboutMe></AboutMe>
      </section>
      <section id='projects'>
        <h3 className='w-[50%] mx-auto mb-7 font-bold text-3xl'>Projects</h3>
        <p className='w-[50%] mx-auto mb-24 font-medium text-lg text-indigo-400'>take a look into my projects</p>
        <ProjectWrapper projects={projects}>
        </ProjectWrapper>
      </section>
      <Footer></Footer>
    </>
  )
}

export default App
