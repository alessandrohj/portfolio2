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



    return (
<main className='min-h-screen p-12'>
            <section className='container mx-auto'>
                <div className='grid place-content-center items-center sm:relative lg:pb-2 md:flex md:flex-row-reverse md:gap-10'>
                    <img src={CVImage} alt="CVImage" className='bg-none responsive CVImage mb-1' />
                    <div className='flex-col'>
                <h1 className='text-6xl text-center cursive'>Projects Page</h1>
                <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to my projects</h2>
                </div>
                </div>
                <div className='grid gap-10 sm:grid-cols-2 md:grid-cols-3'>
                    {projectData && projectData.map((project, index)=> (
                     <div className="rounded overflow-hidden shadow-xl project-card border-2 border-indigo-100">
                       <img className="w-full lazy project-image" src={project.mainImage.asset.url} alt={project.title} />
                       <div className="px-6 py-4">
                         <div className="font-bold text-xl mb-2 project-title">{project.title}</div>
                         <p className="text-gray-700 text-base">
                           {project.description}
                         </p>
                       </div>
                       <div className="px-6 pt-4 pb-2 flex flex-wrap items-center">
                       {
                                    project.tags.map((tag, index)=>(
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 project-tag" key={index}>#{tag}</span>
                                    ))
                            }
                     </div>
                     <div className='project-links flex justify-center items-baseline'>
                     {
                                   project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer" className='project-live-link'>Live Version</a> : ''
                               }
                               {
                                   project.codeURL ?  <a href={project.codeURL} target="_blank" rel="noopener noreferrer" className='project-code-link'>Code</a> : ''
                               }
                             </div>
                     </div>
                    
        ))}
                </div>
            </section>
        </main>
    )
}