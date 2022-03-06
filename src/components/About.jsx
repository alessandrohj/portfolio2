import React from 'react';
import aboutMeImg from '../imgs/undraw_about_me_wa29.svg'

export default function About(){
    let spanClass = 'grid grid-cols-2 m-2 place-content-between text-left';
    let titleClass ='font-bold text-left ml-10 pl-5';
    return (
      <section id='about'>
         <h1 className='text-5xl font-bold flex justify-center cursive'>About Me</h1>
        <div className='flex flex-col sm:flex-rol mb-10'>
        <div className="container mx-auto font-sans sm:pt-5 grid place-items-center">
            <img src={aboutMeImg} alt="About Me" className='sm:pt-5 self-center h-2/3' />
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