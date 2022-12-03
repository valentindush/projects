import React from 'react'
import {Link} from 'react-router-dom'
interface propstType {
    project: {
        url: string,
        name: string,
        image: string
    }
}

export const Project = ({ project }: propstType) => {
    return (
        <Link to={project.url}>
            <div className='border border-gray-300 border-opacity-25 bg-white bg-opacity-[.08] backdrop-blur-xl hover:bg-opacity-10 transition h-[300px] w-[300px] rounded-lg relative'>
                <div className="mt-5">
                    <img src={project.image} className="w-[70%] h-[70%] object-cover mx-auto" alt="" />
                </div>
                <div className="absolute bottom-3 w-full">
                    <p className='text-gray-300 text-center text-lg font-medium'>{project.name}</p>
                </div>
            </div>
        </Link>
    )
}
