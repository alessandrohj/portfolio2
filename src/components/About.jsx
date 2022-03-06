import React from 'react';
import aboutMeImg from '../imgs/undraw_about_me_wa29.svg'

export default function About(){
    let spanClass = 'grid grid-cols-2 m-2 place-content-between text-left';
    let titleClass ='font-bold text-left lg:text-center ml-10 pl-5';
    return (
      <section id='about'>
        <div className='flex flex-col mb-10'>
        <div className='container grid w-1/2 md:w-5/6 lg:w-1/2 grid-rows-1 sm:grid-cols-2 object-contain content-center mx-auto md:mb-7'>
            <img src={aboutMeImg} alt="About Me" className='float-right object-contain place-self-center pr-4 w-full'/>
      <h1 className='text-5xl font-bold flex justify-center text-center cursive py-10'>Tech Experience</h1>
            </div>
        <div className="container sm:mt-10 font-sans place-items-center text-left">
          <div className='titles '>
            <span className={spanClass}>
            <p className={titleClass}>Name:</p>
            <p>Alessandro de Jesus</p>
            </span>
            <span className={spanClass}>
            <p className={titleClass}>Location:</p>
            <p>Ottawa, Canada</p>
            </span>
            <span className={spanClass}>
            <p className={titleClass}>Degrees:</p>
            <span>
            <p>Mobile Application Design and Development @ Algonquin College</p>
            <p>Post-Graduate Degree in Software Engineering @ PUC Minas Brazil</p>
            </span>
            </span>
            <span className={spanClass}>
            <p className={titleClass}>Experience:</p>
            <p>React Developer | Web Developer | Full Stack Developer</p>
            </span>
            <span className={spanClass}>
            <p className={titleClass}>Languages:</p>
            <p>English</p>
            </span>
            <span className={spanClass}>
            <p className={titleClass}>Contact:</p>
            <p>contact@alessandroj.ca</p>
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