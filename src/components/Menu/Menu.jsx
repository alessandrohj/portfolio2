import React, {useEffect, useState} from 'react';
import { Link } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';
import './Menu.css'


export default function SideBar () {
    let menuClass = 'inline-flex items-center py-3 my-6 rounded text-white hover:bg-red-700 menu-item';
    const [isOpen, setOpen] = useState(false)

    function handleIsOpen(){
        setOpen(true);
    }
    function handleClose(){
        setOpen(false);
    };
    useEffect(()=>{
        
    }, [isOpen])

    return (
      <Menu onClose={handleClose} onOpen={handleIsOpen} isOpen={isOpen}>
        <Link onClick={handleClose} className={menuClass}  activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
        <Link onClick={handleClose} className={menuClass}  activeClass="active" to="tech" spy={true} smooth={true} offset={50} duration={500}>Tech</Link>
        <Link onClick={handleClose} className={menuClass}  activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
        <Link onClick={handleClose} className={menuClass}  activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
      </Menu>
    );
  };