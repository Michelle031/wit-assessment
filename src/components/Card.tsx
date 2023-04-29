import React from 'react'

interface CardType {
    img: string,
    title: string,
    days: string
}

function Card({title, days, img}: CardType) {
  return (
    <div className='min-w-[36vw] space-y-2'>
        <div className='w-full bg-white rounded-3xl flex items-center justify-center py-4 px-7'>
            <img src={img} alt="" className='w-full h-full scale-105' />
        </div>
        <div className='flex space-x-1 items-center'>
            <div className='progress w-[85%] h-2 bg-[#CFD3EA] rounded-full'>
                <div className='h-2 bg-[#6C75B2] rounded-full w-[70%]'></div>
            </div>
            <p className='text-[#333] text-sm font-medium'>60%</p>
        </div>
        <h4 className='font-bold text-[#333]'>{title}</h4>
        <p className='!-mt-[0.5px] text-sm text-[#888]'>{days} days &#x2022; daily</p>
    </div>
  )
}

export default Card