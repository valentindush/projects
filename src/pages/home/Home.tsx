import React from 'react'
import emoji from '../../assets/emoji.png'
import calc from '../../assets/calc.webp'
import { Project } from './Project'

const Home = () => {

    const projects: {url: string,name: string,image: string}[] = [
            {
                name: "Sentiment analyser",
                url: "sentiment-analyser",
                image: emoji
            },
            {
                name: "Calculator",
                url: "calc",
                image: calc
            },
        ]


    return (
        <div className='bg-[#0e0e1f] h-screen w-screen p-12 overflow-auto'>
            <header className=''>
                <h2 className='text-gray-300 text-2xl font-bold'>Welcome to my  projects page</h2>
                <h2 className='text-gray-400 text-md font-bold mt-6'>Explore some of my projects here !</h2>
            </header>

            <div className="projects flex mt-12 gap-4 flex-wrap">
                {projects.map((project, index)=>{
                    return <Project key={index} project={project}/>
                })}
            </div>

            {/* BLURED DIVS */}

            <div className="w-12 z-0 top-0 absolute h-12 bg-blue-500 blur-2xl">
            </div>
            <div className="w-12 z-0 top-0 right-0 absolute h-12 bg-blue-500 blur-2xl">
            </div>
            <div className="w-12 z-0 top-1/2 absolute h-12 bg-blue-500 blur-2xl">
            </div>

        </div>
    )
}

export default Home