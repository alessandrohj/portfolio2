import React from 'react';
import aboutMeImg from '../imgs/undraw_about_me_wa29.svg'

export default function About(){
    let spanClass = 'grid grid-cols-2 m-2 place-content-between lg:text-xl';
    let titleClass =' lg:text-xl font-bold text-left lg:text-right mr-5 ml-10 pl-5';
    let descriptionClass = 'lg:text-xl';
    return (
      <section id='about'>
        <div className='flex flex-col mb-10 font-sans text-lg'>
        <div className='container grid w-1/2 md:w-5/6 lg:w-1/2 grid-rows-1 sm:grid-cols-2 object-contain content-center mx-auto md:mb-7'>
            <img src={aboutMeImg} alt="About Me" className='pr-2'/>
      <h1 className='text-5xl lg:text-7xl font-bold flex cursive mt-28'>About Me</h1>
            </div>
        <div className="container sm:mt-10">
          <div className='titles '>
            <span className={spanClass}>
            <p className={titleClass}>Name:</p>
            <p className={descriptionClass}>Alessandro de Jesus</p>
            </span>
            <span className={spanClass}>
            <p className={titleClass}>Location:</p>
            <p className={descriptionClass}>Ottawa, Canada</p>
            </span>
            <span className={spanClass}>
            <p className={titleClass}>Degrees:</p>
            <span>
            <p className={descriptionClass}>Mobile Application Design and Development @ Algonquin College (May/2022)</p>
            <p className={descriptionClass}>Post-Graduate Degree in Software Engineering @ PUC Minas Brazil</p>
            </span>
            </span>
            <span className={spanClass}>
            <p className={titleClass}>Experience:</p>
            <p className={descriptionClass}>React Developer | Web Developer | Full Stack Developer</p>
            </span>
            <span className={spanClass}>
            <p className={titleClass}>Languages:</p>
            <p className={descriptionClass}>English | Portuguese</p>
            </span>
            <span className={spanClass}>
            <p className={titleClass}>Contact:</p>
            <p className={descriptionClass}>contact@alessandroj.ca</p>
            </span>
            {/* <p>Location:</p>
            <p>Degrees:</p>
            <p>Contact:</p> */}
          </div>
          {/* <div className='content'>
            <p>Alessandro de Jesus</p>
            <p>Ottawa, Canada</p>
            <p>Mobile Application Design and Development @ Algonquin College (May/2022)</p>
            <p>Contact:</p>
          </div> */}
            </div>
        </div>
        </section>
    )
}