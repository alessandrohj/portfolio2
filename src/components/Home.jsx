import React from 'react';
import image from '../imgs/undraw_Mobile_application_mr4r.svg';

export default function Home(){
    return (
       <main className='sm:min-h-screen py-5'>
           <div className='container xl:flex py-5 p-2'>
           <img src={image} alt='Mobile responsive'/>
           <section className='relative flex flex-col py-3 px-8 sm:responsive items-center gap-4'>
               <h1 className='text-7xl sm:text-8xl text-center text-black font-bold cursive leading-none lg:leading-snug self-center'>Hey there! <br/> I'm Alessandro.</h1>
               <h3 className='text-lg text-black text-center font-bold leading-none lg:leading-snug'>A developer trained to design and develop <br/> user-friendly websites and applications.</h3>
           </section>
           <div className="ocean">
            <div className="wave"></div>
             <div className="wave"></div>
            </div>
           </div>
       </main>
    )
}