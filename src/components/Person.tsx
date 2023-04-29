import React from 'react'
import { ArrowUpIcon } from "@heroicons/react/24/solid"

interface PersonType {
    name: string,
    location: string,
    streak: string,
    img: string
}

function Person({name, streak, location, img}: PersonType) {
  return (
    <div className='w-full rounded-lg bg-white flex space-x-3 px-3 py-2'>
        <div className='w-10 h-10 rounded-full border border-[#FDD4BF]'>
            <img src={img} alt="" className='w-10 h-10 rounded-full'/>
        </div>
        <div className='flex-1'>
            <p className='text-[#333] font-bold text-lg'>{name}</p>
            <p className='text-sm text-[#aaa]'>{location}</p>
        </div>
        <div className='flex space-x-1 items-center text-sm '>
            <ArrowUpIcon className='h-5 w-4 stroke-[3px] font-bold text-[#6672B6]'/>
            <p>&#128293; <span className='text-orange-400'>{streak}</span></p>
        </div>
    </div>
  )
}

export default Person