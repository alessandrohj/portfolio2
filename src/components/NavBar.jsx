import React from 'react';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-scroll';
import './NavBar.css';
import {SocialIcon} from 'react-social-icons';
import SideBar from './Menu/Menu'
import { DiCssdeck } from 'react-icons/di';


export default function NavBar({navBarBG}) {
    let menuClass = 'inline-flex items-center py-3 px-3 my-6 tracking-widest cursor-pointer rounded text-black menu-items';
    return (
        <header className={navBarBG ? 'black rounded-b-md' : ''}>
            <div id='top-nav' className='container grid grid-cols-3 mx-auto sm:flex justify-between'>
                    <Link exact to="home" activeClassName='text-black' activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}
                    className='inline-flex cursor-pointer items-center sm:py-6 sm:px-3 mr-4 text-4xl lg:text-5xl font-bold cursive tracking-widest order-2 sm:order1 name-top'>   <DiCssdeck size='3rem'/>
                        Alessandro
                    </Link>
                <nav className='sm:flex sm:order-2 text-lg lg:text-2xl'>
                    <div className='hidden sm:flex'>
        <Link className={menuClass}  activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
        <Link className={menuClass}  activeClass="active" to="tech" spy={true} smooth={true} offset={50} duration={500}>Tech</Link>
        <Link className={menuClass}  activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
                    </div>
                    <div className='sm:hidden order-1'>
                    <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                </nav>
            <div className='inline-flex pl-2 py-3 px-3 my-6 order-3 ml-4'>
            <SocialIcon url='https://github.com/deje0014' className='mr-4 hover:shadow-lg social-icon'  target='_blank' fgColor='#fff' style={{height: 39, width: 39}} />
            <SocialIcon url='https://www.linkedin.com/in/j-alessandro/' className='mr-4 hover:shadow-lg social-icon' target='_blank' fgColor='#fff' style={{height: 39, width: 39}}/>
            </div>
            </div>
        </header>
    )
}