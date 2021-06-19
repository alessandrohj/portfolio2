import React from 'react';
import aboutMeImg from '../imgs/undraw_about_me_wa29.svg'

export default function About(){
    return (
        <main className='min-h-screen ml-2'>
        <div className="container mx-auto font-sans pt-5 grid place-items-center">
            <h1 className="text-2xl font-bold pl-1">Under construction.</h1>
            <img src={aboutMeImg} alt="About Me" className='pt-5 self-center' />
        </div>
        </main>
    )
}