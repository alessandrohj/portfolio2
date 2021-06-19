import React from 'react';
import contactImg from '../imgs/undraw_contact_us_15o2.svg'
export default function Contact(){
    return (
        <main className='min-h-screen pt-5'>
        <div className="container mx-auto font-sans flex place-content-center">
            <h1 className="text-2xl font-bold">Under construction.</h1>
            <p className="py-3 pb-8 font-bold">In the meantime, you can find me on <a href="https://www.linkedin.com/in/j-alessandro/" target='_blank' rel='noopener noreferrer' className='text-blue-500 text-xl font-bold'>Linkedln</a> .</p>
        <img src={contactImg} alt='' classNam='ml-2' />
        </div>
        </main>
    )
}