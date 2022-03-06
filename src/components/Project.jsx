import React, {useState, useEffect}  from 'react';
import sanityClient from '../client.js';
import './project.css'
import CVImage from '../imgs/undraw_Updated_resume_re_q1or.svg'

export default function Project() {
    const [projectData, setProjectData] = useState(null);
    useEffect(()=>{
        sanityClient.fetch(`*[_type == "project"]{
            title,
            description,
            projectType,
            link,
            codeURL,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            tags
        }`)
        .then((data)=>{
            setProjectData(data)
        })
        .catch(console.error)
    }, [])

let buttonClass = "rounded-lg hover:border p-1 hover:bg-blue-400 hover:text-white font-semibold hover:shadow-md"

    return (
<section id="projects-section">
<div className='container grid w-1/2 md:w-5/6 lg:w-1/2 grid-rows-1 sm:grid-cols-2 object-contain content-center mx-auto md:mb-7'>
            <img src={CVImage} alt="Projects" className='float-right object-contain place-self-center pr-4 w-full'/>
      <h1 className='text-5xl font-bold flex justify-center text-center cursive py-10'>Projects</h1>
            </div>
                <div className='wrapper m-5 gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-11 mt-2 '>
                {projectData && projectData.map((project, index)=> (
                    <div className=' antialiased lg:col-span-2' key={index}>
                <img src={project.mainImage.asset.url} alt={project.title} key={index} className='w-full rounded-lg border-2 border-gray-400' />
                <div className="description  min-h-fit border relative px-6 m-3 -mt-14 bg-white rounded-3xl shadow-md ">
                <h1 className='font-bold uppercase leading-tight m-1'>{project.title}</h1>
                    <p className="text-description">{project.description}</p>
                    {
                                    project.tags.map((tag, index)=>(
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 project-tag" key={index}>#{tag}</span>
                                    ))
                            }

                    <span className='flex gap-5 place-content-around m-3'>
                    {
                                   project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer" className={buttonClass}>Live Version</a> : ''
                               }
                               {
                                   project.codeURL ?  <a href={project.codeURL} target="_blank" rel="noopener noreferrer" className={buttonClass}>Code</a> : ''
                               }
                    </span>
                    </div>
                    </div>
                ))}
                </div>
        </section>
    )
}