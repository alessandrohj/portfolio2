import React from 'react';
import {SocialIcon} from 'react-social-icons';

export default function Footer(){
    return(
        <footer className='bg-indigo-900 pl-6'>
            <div className='container grid grid-cols-3 mx-auto'>
                <div className='text-white place-self-center col-span-2 text-center lg:text-start lg:justify-self-start'>
                    <p>Copyright © Alessandro de Jesus 2021 </p>
                </div>
        <div className='inline-flex my-6 ml-4 row-start-1 col-start-3 justify-end'>
        <SocialIcon url='https://github.com/deje0014' className='mr-4 hover:shadow-lg social-icon'  target='_blank' fgColor='#fff' style={{height: 37, width: 37}} />
        <SocialIcon url='https://www.linkedin.com/in/j-alessandro/' className='mr-4 hover:shadow-lg social-icon' target='_blank' fgColor='#fff' style={{height: 37, width: 37}}/>
        </div>
        </div>
        </footer>
    )
}