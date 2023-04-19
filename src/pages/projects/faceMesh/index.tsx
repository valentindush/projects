import * as mp from '@mediapipe/face_mesh'
import { useRef, useEffect, useState } from 'react';
const FaceMesh = () => {

    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        console.log(mp)
    }, [])

    const start = ()=>{

    }

    const stop = ()=>{

    }


    return (
        <div className='bg-[#0e0e1f] w-screen h-screen p-12'>
            <h2 className='text-gray-300 font-semibold text-2xl text-center'>Face mesh detector</h2>

            <div className="flex items-center justify-center">
                <div className="mt-4 border-2 p-3 rounded-md border-white border-opacity-40 w-[700px] h-[500px]">

                </div>

            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
                <button className="border border-blue-400 text-blue-400 p-2 px-4 rounded-lg">Start</button>
                <button className="border border-red-400 text-red-400 p-2 px-4 rounded-lg">Stop</button>
            </div>
        </div>
    )
}

export default FaceMesh