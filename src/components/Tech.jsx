import React from 'react';
import { DiJavascript, DiNodejsSmall, DiJava, } from 'react-icons/di';
import { SiAdobexd } from "react-icons/si";
import { IoLogoPwa } from "react-icons/io5";
import ImgList from '../imgs/undraw_my_notifications_rjej.svg'

export default function Tech(){
    let listStyle = "list-disc list-inside md:list-none md:leading-relaxed";
    let titleStyle = "font-bold text-2xl pl-1 text-indigo-900";
    let languageStyle = "flex flex-row gap-1 pb-2 items-center";

    return (
        <main className='select-none pb-4'>
        <div className="container mx-auto font-sans flex flex-col">
        <h1 className='text-7xl flex justify-center cursive py-10'>Tech Experience</h1>
        <section id="description">
            <div className='container grid grid-rows-1 object-contain justify-center mb-7'>
            <img src={ImgList} alt="" className='ImgList float-right object-contain h-80 w-full'/>
            </div>
        </section>
        <section id="experience">
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6 pl-4'>
            <div id="frontend">
                <div className={languageStyle}>
            <DiJavascript size="2rem"/>
                <h2 className={titleStyle}>Frontend</h2>
                </div>
                <ul className={listStyle}>
                    <li>HTML.</li>
                    <li>Sass.</li>
                    <li>CSS.</li>
                    <li>Javascript.</li>
                    <li>Familiarity with ReactJS.</li>
                </ul>
            </div>
            <div id="backend">
                <div className={languageStyle}>
            <DiNodejsSmall size="2rem"/>
                <h2 className={titleStyle}>Backend</h2>
                </div>
                <ul className={listStyle}>
                    <li>Node.JS.</li>
                    <li>RESTful APIs.</li>
                    <li>CRUD methods, JWT authentication, XSS protection, route handling.</li>
                    <li>MongoDB.</li>
                    <li>Docker.</li>
                </ul>
            </div>
            <div id="design">
                <div className={languageStyle}>
            <SiAdobexd size="2rem"/>
                <h2 className={titleStyle}>Design</h2>
                </div>
                <ul className={listStyle}>
                    <li>UX/UI Design.</li>
                    <li>Mock-ups and prototypes using Moqups.</li>
                    <li>Wireframing using Adobe XD.</li>
                    <li>Use of Adobe Illustrator and Photoshop.</li>
                </ul>
            </div>
            <div id="mobile">
                <div className={languageStyle}>
            <IoLogoPwa size="2.5rem"/>
                <h2 className={titleStyle}>Mobile</h2>
                </div>
                <ul className={listStyle}>
                    <li>Progressive Web Applications.</li>
                    <li>Apache Cordova.</li>
                </ul>
            </div>
            <div id="oop" className='col-span-2 justify-self-center md:justify-self-auto'>
                <div className={languageStyle}>
            <DiJava size="3rem"/>
                <h2 className={titleStyle}>OOP</h2>
                </div>
                <ul className={listStyle}>
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