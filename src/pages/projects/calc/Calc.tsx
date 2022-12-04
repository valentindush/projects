import React, { useState } from 'react'

const Calc = () => {

    const btns_nums = ['9','8','7','6','5','4','3','2','1','0','.']
    const btns_operators = ['+','-','x','/','back','clear', '=']
    const [calcStr,setCalcStr] = useState("")
    const [calcResult,setCalcResult] = useState("")

    const updateStr = (num: string)=>{
        if(num !== '=' && num !== 'clear' && num !== 'back'){
            setCalcStr((calcStr)=>calcStr+num)
        }
        if(num === '=' && calcStr !== ''){
            setCalcResult(eval(calcStr.replace('x','*')))
            setCalcStr(eval(calcStr.replace('x','*')))
        }   

        if(num === 'back'){
            setCalcStr((calcStr)=>calcStr.slice(0,-1))
        }
        if(num === 'clear'){
            setCalcStr("")
            setCalcResult("")
        }
    }
  return (
    <div className='bg-[#0e0e1f] w-screen h-screen p-12'>
        <h2 className='text-gray-300 font-semibold text-xl text-center'>Calculator</h2>
        <div className="w-[500px] p-4 border-2 border-gray-400 border-opacity-40 rounded mx-auto mt-12">
            <div className="display">
                <div className=" h-[9rem] p-4 border-2 border-gray-400 border-opacity-40 rounded flex flex-col justify-center text-gray-400 text-3xl font-bold">
                    {calcStr}
                    <p className='mr-0 ml-auto text-sm mt-5'>{calcResult}</p>
                </div>
                <div className="flex gap-4">
                    <div className="numbers flex gap-3 flex-wrap mt-4 w-[50%]">
                    {btns_nums.map((btn,index)=>{
                        return (
                        <button key={index} onClick={()=>updateStr(btn)} className=" w-16 h-16 p-2 border-2 border-gray-400 border-opacity-40 rounded text-gray-400 font-bold bg-white bg-opacity-[.08] hover:bg-opacity-[.1] backdrop-blur-md active:scale-105">
                            {btn}
                        </button>
                        )
                    })}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4 w-[50%]">
                    {btns_operators.map((btn,index)=>{
                        return (
                        <button key={index} onClick={()=>updateStr(btn)} className=" w-16 h-16 p-2 border-2 block border-gray-400 border-opacity-40 rounded text-gray-400 font-bold bg-white bg-opacity-[.08] hover:bg-opacity-[.1] backdrop-blur-md active:scale-105">
                            {btn}
                        </button>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calc