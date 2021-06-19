import React from 'react';
import aboutMeImg from '../imgs/undraw_about_me_wa29.svg'

export default function About(){
    return (
        <main className='min-h-screen flex place-content-center ml-2'>
        <div className="container mx-auto font-sans pt-5">
            <h1 className="text-2xl font-bold pb-2 pl-1">Under construction.</h1>
            <img src={aboutMeImg} alt="About Me" className='pt-5 self-center' />
        </div>
        </main>
    )
}