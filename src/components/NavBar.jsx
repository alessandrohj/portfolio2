import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import {SocialIcon} from 'react-social-icons';
import SideBar from './Menu/Menu'
import { DiCssdeck } from 'react-icons/di';


export default function NavBar() {
    let menuClass = 'inline-flex items-center py-3 px-3 my-6 rounded text-white menu-items';
    return (
        <header className='bg-indigo-800'>
            <div id='top-nav' className='container grid grid-cols-3 mx-auto sm:flex justify-between'>
                    <NavLink exact to='/' activeClassName='text-white'
                    className='inline-flex items-center sm:py-6 sm:px-3 mr-4 text-white text-4xl lg:text-5xl font-bold cursive tracking-widest order-2 sm:order1 name-top'>   <DiCssdeck size='3rem'/>
                        Alessandro
                    </NavLink>
                <nav className='sm:flex sm:order-2 text-lg lg:text-2xl'>
                    <div className='hidden sm:flex'>
                    <NavLink to='/project' className={menuClass}>
                        Projects
                    </NavLink>
                    <NavLink to='/tech' className={menuClass}>
                        Tech
                    </NavLink>
                    <NavLink to='/contact' className={menuClass}>
                       Contact
                    </NavLink>
                    </div>
                    <div className='sm:hidden order-1'>
                    <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                </nav>
            <div className='inline-flex py-3 px-3 my-6 order-3 ml-4'>
            <SocialIcon url='https://github.com/deje0014' className='mr-4 hover:shadow-lg social-icon'  target='_blank' fgColor='#fff' style={{height: 37, width: 37}} />
            <SocialIcon url='https://www.linkedin.com/in/j-alessandro/' className='mr-4 hover:shadow-lg social-icon' target='_blank' fgColor='#fff' style={{height: 37, width: 37}}/>
            </div>
            </div>
        </header>
    )
}