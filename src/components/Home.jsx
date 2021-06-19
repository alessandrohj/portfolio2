import React from 'react';
import image from '../imgs/undraw_Mobile_application_mr4r.svg';

export default function Home(){
    return (
       <main className='min-h-screen home-main flex place-content-center pl-1 pr-1'>
           <div className='container lg:flex-row lg:py-5 flex flex-col place-content-center items-center home pb-10'>
           <img src={image} alt='' className='responsive justify-center'/>
           <div className='relative flex flex-col sm:responsive items-center gap-4'>
               <h1 className='text-7xl text-center text-black font-bold cursive leading-none lg:leading-snug self-center pt-5'>Hey there! <br/> I'm Alessandro.</h1>
               <h3 className='text-lg text-black text-center font-bold leading-none lg:leading-snug'>A developer trained to design and develop user-friendly websites and applications.</h3>
           </div>
           </div>
       </main>
    )
}