import React from 'react';
import { DiJavascript, DiNodejsSmall, DiJava, DiReact} from 'react-icons/di';
import { SiAdobexd } from "react-icons/si";
import { IoLogoPwa } from "react-icons/io5";
import ImgList from '../imgs/undraw_my_notifications_rjej.svg'

export default function Tech(){
    let listStyle = "list-disc lg:text-xl list-inside md:list-none md:leading-relaxed";
    let titleStyle = "font-bold text-2xl lg:text-4xl pl-1";
    let languageStyle = "flex flex-row gap-1 pb-2 items-center";

    return (
        <div id='tech-section'>    
        <div className="container mx-auto font-sans flex flex-col">
        <div id="description">
            <div className='container grid w-1/2 md:w-5/6 lg:w-1/2 grid-rows-1 sm:grid-cols-2 object-contain content-center mx-auto md:mb-7'>
            <img src={ImgList} alt="Tech Experience" className='float-right object-contain place-self-center pr-4 w-full'/>
      <h1 className='text-5xl lg:text-7xl font-bold flex justify-center text-center cursive py-10 '>Tech Experience</h1>
            </div>
        </div>
        <div id="experience" className='items-center py-10'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6 pl-4'>
            <div id="frontend">
                <div className={languageStyle}>
            <DiJavascript size="2rem"/>
                <h2 className={titleStyle}>Frontend</h2>
                </div>
                <ul className={listStyle}>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Sass</li>
                    <li>React.JS</li>
                    <li>Next.JS</li>
                </ul>
            </div>
            <div id="backend">
                <div className={languageStyle}>
            <DiNodejsSmall size="2rem"/>
                <h2 className={titleStyle}>Backend</h2>
                </div>
                <ul className={listStyle}>
                    <li>Node.JS</li>
                    <li>Express.JS</li>
                    <li>RESTful APIs</li>
                    <li>MongoDB</li>
                    <li>Familiarity with Docker</li>
                </ul>
            </div>
            <div id="design">
                <div className={languageStyle}>
            <SiAdobexd size="2rem"/>
                <h2 className={titleStyle}>Design</h2>
                </div>
                <ul className={listStyle}>
                    <li>UX/UI Design.</li>
                    <li>Mock-ups and Wireframing</li>
                    <li>Prototyping: Adobe XD and Figma</li>
                    <li>Adobe Illustrator, Photoshop</li>
                </ul>
            </div>
            <div id="mobile">
                <div className={languageStyle}>
            <IoLogoPwa size="2.5rem"/>
                <h2 className={titleStyle}>Mobile</h2>
                </div>
                <ul className={listStyle}>
                    <li>Progressive Web Applications</li>
                    <li>Apache Cordova</li>
                    <li>React Native</li>
                    <li>Familiarity with Kotlin and Swift</li>
                </ul>
            </div>
            <div id="oop" className='md:justify-self-auto'>
                <div className={languageStyle}>
            <DiJava size="2.5rem"/>
                <h2 className={titleStyle}>OOP</h2>
                </div>
                <ul className={listStyle}>
                    <p className='font-bold'>Familiarity with:</p>
                    <li>Java.</li>
                    <li>C++.</li>
                    <li>C#.</li>
                </ul>
            </div>
            <div id="oop" className='md:justify-self-auto'>
                <div className={languageStyle}>
            <DiReact size="2.5rem"/>
                <h2 className={titleStyle}>Frameworks & Libraries</h2>
                </div>
                <ul className={listStyle}>
                    <li>React.JS</li>
                    <li>React Native</li>
                    <li>Next.JS</li>
                    <li>Tailwind CSS</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}