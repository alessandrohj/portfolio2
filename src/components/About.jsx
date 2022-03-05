import React from 'react';
import aboutMeImg from '../imgs/undraw_about_me_wa29.svg'

export default function About(){
    let spanClass = 'flex gap-4 m-2';
    return (
      <section id='about'>
         <h1 className='text-5xl font-bold flex justify-center cursive'>Tech Experience</h1>
        <div className='flex'>
        <div className="container mx-auto font-sans pt-5 grid place-items-center">
            <img src={aboutMeImg} alt="About Me" className='pt-5 self-center h-2/3' />
        </div>
        <div className="container mt-10 font-sans flex gap-3 place-items-center">
          <div className='titles'>
            <span className={spanClass}>
            <p className=' font-bold'>Name:</p>
            <p className='pl-5 text-right'>Alessandro de Jesus</p>
            </span>
            <span className={spanClass}>
            <p className=' font-bold'>Location:</p>
            <p>Ottawa, Canada</p>
            </span>
            <span className={spanClass}>
            <p className=' font-bold'>Degrees:</p>
            <span>
            <p className='pl-1'>Mobile Application Design and Development @ Algonquin College</p>
            <p className='pl-1'>Post-Graduate Degree in Software Engineering @ PUC Minas Brazil</p>
            </span>
            </span>
            <span className={spanClass}>
            <p className='font-bold'>Experience:</p>
            <p>React Developer | Web Developer | Full Stack Developer</p>
            </span>
            <span className={spanClass}>
            <p className='font-bold'>Languages:</p>
            <p>English</p>
            <p>Portuguese</p>
            </span>
            <span className={spanClass}>
            <p className=' font-bold'>Contact:</p>
            <i class="fas fa-envelope-open-text fa-2x mr-2"></i>
            <p className='pl-1'>email@email.com</p>
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