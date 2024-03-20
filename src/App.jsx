import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'

import dataFromJson from './data.json'
import ProjectWrapper from './components/ProjectWrapper'
import Hero from './components/Hero'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import ContactForm from './components/ContactForm'

function App() {
  const [data, setData] = useState("")
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setData(dataFromJson)
    if (data) {
      console.log(data);
    }
    setProjects(dataFromJson[0].projects)
    if (projects) {
      console.log(projects[0]);
    }
  },[])
  

  return (
    <>
      <Header></Header>
      <section className='w-[50%] my-[12%] mx-auto flex items-center justify-around '>
        <Hero></Hero>
      </section>
      <section id='about-me' className='mt-12 pt-12'>
        <h3 className='w-[50%] mx-auto mb-7 font-bold text-3xl'>About me</h3>
        <p className='w-[50%] mx-auto mb-24 font-medium text-lg text-indigo-400'>who i am?</p>
        <AboutMe></AboutMe>
      </section>
      <section id='projects' className='mt-8 pt-12'>
        <h3 className='w-[50%] mx-auto mb-7 font-bold text-3xl'>Projects</h3>
        <p className='w-[50%] mx-auto mb-24 font-medium text-lg text-indigo-400'>take a look into my projects</p>
        <ProjectWrapper projects={projects}>
        </ProjectWrapper>
      </section>
      <section id='contact' className='mt-12 pt-12'>
        <h3 className='w-[50%] mx-auto mb-7 font-bold text-3xl'>Contact me</h3>
        <p className='w-[50%] mx-auto mb-24 font-medium text-lg text-indigo-400'>get in touch</p>
        <ContactForm>
        </ContactForm>
      </section>
      <Footer></Footer>
    </>
  )
}

export default App
