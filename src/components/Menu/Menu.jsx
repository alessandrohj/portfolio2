import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Menu.css'

export default function SideBar () {
    let menuClass = 'inline-flex items-center py-3 px-3 my-6 rounded text-white hover:bg-red-700 menu-item';
    return (
      <Menu>
                    <NavLink to='/' className={menuClass}>
                        Home
                    </NavLink>
                    <NavLink to='/project' className={menuClass}>
                        Projects
                    </NavLink>
                    <NavLink to='/tech' className={menuClass}>
                        Tech
                    </NavLink>
                    <NavLink to='/about' className={menuClass}>
                        About
                    </NavLink>
                    <NavLink to='/contact' className={menuClass}>
                       Contact
                    </NavLink>
      </Menu>
    );
  };