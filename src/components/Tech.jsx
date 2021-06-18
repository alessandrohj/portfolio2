import React from 'react';
import { DiJavascript, DiNodejsSmall, DiJava, } from 'react-icons/di';
import { SiAdobexd } from "react-icons/si";
import { IoLogoPwa } from "react-icons/io5";
import ImgList from '../imgs/undraw_my_notifications_rjej.svg'
import './Tech.css'

export default function Tech(){
    return (
        <main className='select-none pb-4'>
        <div className="container mx-auto font-sans">
        <h1 className='text-5xl flex justify-center cursive  py-10'>Tech Experience</h1>
        <section id="description">
            <div className='flex flex-row justify-center gap-2'>

            <img src={ImgList} alt="" className='ImgList float-right pb-4'/>
            </div>
        </section>
        <section id="experience">
            <div className='grid grid-cols-2 gap-6'>
            <div id="frontend">
                <div className='flex flex-row gap-2 pb-2'>
            <DiJavascript size="2rem"/>
                <h2 className="font-bold">Frontend</h2>
                </div>
                <ul className="list-none list-inside">
                    <li>HTML.</li>
                    <li>Sass.</li>
                    <li>CSS.</li>
                    <li>Javascript.</li>
                    <li>Familiarity with ReactJS.</li>
                </ul>
            </div>
            <div id="backend">
                <div className='flex flex-row gap-2 pb-2'>
            <DiNodejsSmall size="2rem"/>
                <h2 className="font-bold">Backend</h2>
                </div>
                <ul className="list-none list-inside">
                    <li>Node.JS.</li>
                    <li>RESTful APIs.</li>
                    <li>CRUD methods, JWT authentication, XSS protection, route handling.</li>
                    <li>MongoDB.</li>
                    <li>Docker.</li>
                </ul>
            </div>
            <div id="design">
                <div className='flex flex-row gap-1 pb-2'>
            <SiAdobexd size="2rem"/>
                <h2 className="font-bold">Design</h2>
                </div>
                <ul className="list-none list-inside">
                    <li>UX/UI Design.</li>
                    <li>Mock-ups and prototypes using Moqups.</li>
                    <li>Wireframing using Adobe XD.</li>
                    <li>Use of Adobe Illustrator and Photoshop.</li>
                </ul>
            </div>
            <div id="mobile">
                <div className='flex flex-row gap-1 pb-2'>
            <IoLogoPwa size="2rem"/>
                <h2 className="font-bold">Mobile</h2>
                </div>
                <ul className="list-none list-inside">
                    <li>Progressive Web Applications.</li>
                    <li>Apache Cordova.</li>
                </ul>
            </div>
            <div id="oop">
                <div className='flex flex-row gap-1 pb-2'>
            <DiJava size="2rem"/>
                <h2 className="font-bold">Object Oriented Programming Languages</h2>
                </div>
                <ul className="list-none list-inside">
                    <p className='font-bold'>Familiarity with:</p>
                    <li>Java.</li>
                    <li>C++.</li>
                    <li>C#.</li>
                    <li>Python.</li>
                </ul>
            </div>
            </div>
        </section>
    </div>
    </main>
    )
}