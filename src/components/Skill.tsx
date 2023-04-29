import React from 'react'

interface SkillType {
  img: string,
  title: string
  completed : boolean,
  percent: string
}

function Skill({img, title, completed, percent}: SkillType) {
  return (
    <div className='w-full h-full space-y-3 flex flex-col items-center justify-center bg-white rounded-3xl p-4'>
      <div className='bg-[#6672B6] w-[55%] rounded-full p-4 flex justify-center items-center'>
        <img src={img} alt="" className='w-full h-full scale-105'/>
      </div>
      <h2 className='text-[#333] font-bold text-xl'>{title}</h2>
      <p className='text-[#ccc] font-medium -mt-1'>{percent}</p>
      <button className={`rounded-full w-full text-[0.9rem] font-medium px-5 py-2 ${completed ? "bg-[#FD9666] text-white": "text-[#FD9666] border-[1.8px] border-[#FD9666]"}`}>{completed ? "Completed" : "Good work"}</button>
    </div>
  )
}

export default Skill