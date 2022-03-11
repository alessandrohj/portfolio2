import React from 'react';
import {Link} from 'react-scroll';
import './NavBar.css';
import SideBar from './Menu/Menu'
import { DiCssdeck } from 'react-icons/di';


export default function NavBar({navBarBG}) {
    let menuClass = 'inline-flex lg:text-3xl items-center py-3 px-3 lg:px-6 my-6 tracking-widest cursor-pointer rounded text-black menu-items';
    return (
        <header className={navBarBG ? 'black rounded-b-md' : ''}>
            <div id='top-nav' className='container grid grid-cols-3 mx-auto sm:flex justify-between'>
                    <Link to="home" activeClass="active" spy={true} smooth={true} offset={50} duration={500}
                    className='inline-flex cursor-pointer items-center sm:py-6 sm:px-3 mr-4 text-4xl lg:text-5xl font-bold cursive tracking-widest order-2 sm:order1 name-top'>
                        <DiCssdeck size='3rem'/>
                        Alessandro
                    </Link>
                <nav className='sm:flex sm:order-2 text-lg lg:text-2xl'>
                    <div className='hidden sm:flex'>
        <Link className={menuClass}  activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
        <Link className={menuClass}  activeClass="active" to="tech" spy={true} smooth={true} offset={50} duration={500}>Tech</Link>
        <Link className={menuClass}  activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
        <Link className={menuClass}  activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                    </div>
                    <div className='sm:hidden order-1 -ml-9 -mt-2'>
                    <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                </nav>
            </div>
        </header>
    )
}