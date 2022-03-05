import React from 'react';
import image from '../imgs/undraw_Mobile_application_mr4r.svg';
import Typing from './Typing';

export default function Home(){
    return (
       <div className='min-h-screen home-main flex place-content-center pl-1 pr-1'>
           <div className='container lg:flex-row lg:py-5 flex flex-col place-content-center items-center home pb-10'>
           <img src={image} alt='guy with a phone' className='responsive justify-center h-2/3'/>
           <div className='relative flex flex-col sm:responsive items-center gap-4'>
               <h1 className='text-5xl text-center text-black font-bold leading-none lg:leading-snug self-center pt-5'>Hey there! <br/> I'm Alessandro.</h1>
               <h3 className='text-lg text-black text-center font-bold leading-none lg:leading-snug'><Typing /></h3>
           </div>
           </div>
       </div>
    )
}