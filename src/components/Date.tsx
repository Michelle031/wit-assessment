import React from 'react'
import { ChevronLeftIcon as Left, ChevronRightIcon as Right, CheckIcon as Tick} from "@heroicons/react/24/solid"

function Date() {
  return (
    <div>
        <div className='flex items-center justify-center space-x-2'>
            <div className='p-[0.6px] border-[2px] border-[#6672B6] rounded-md flex items-center justify-center'>
                <Left className='h-5 w-5 text-[#6672B6] font-bold'/>
            </div>
            <h2 className='flex-1 text-center text-xl font-bold text-[#333]'>September</h2>
            <div className='p-[0.6px] border-[2px] border-[#6672B6] rounded-md flex items-center justify-center'>
                <Right className='h-5 w-5 text-[#6672B6] font-bold'/>
            </div>
        </div>
        <div className='flex justify-center items-center space-x-3 mt-8 w-[95%] mx-auto'>
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-white w-9 h-9 p-3 flex justify-center items-center rounded-full'>
                    <p className='text-[#6672B6] text-base font-bold'>2</p>
                </div>
                <p className='text-[#333] text-lg text-center font-bold'>Mon</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-[#6672B6] w-9 h-9 p-3 flex justify-center items-center rounded-full'>
                    <p className='text-base font-bold'>
                        <Tick className='h-5 w-5 stroke-[3px] text-white'/>
                    </p>
                </div>
                <p className='text-[#333] text-lg text-center font-bold'>Tue</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-[#6672B6] w-9 h-9 p-3 flex justify-center items-center rounded-full'>
                    <p className='text-base font-bold'>
                        <Tick className='h-5 w-5 text-white'/>
                    </p>
                </div>
                <p className='text-[#333] text-lg text-center font-bold'>Wed</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-[#FE9665] w-9 h-9 p-3 flex justify-center items-center rounded-full'>
                    <p className='text-[#fff] text-base font-bold'>5</p>
                </div>
                <p className='text-[#FE9665] text-lg text-center font-bold'>Thu</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-white w-9 h-9 p-3 flex justify-center items-center rounded-full'>
                    <p className='text-[#6672B6] text-base font-bold'>6</p>
                </div>
                <p className='text-[#333] text-lg text-center font-bold'>Fri</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-white w-9 h-9 p-3 flex justify-center items-center rounded-full'>
                    <p className='text-[#6672B6] text-base font-bold'>7</p>
                </div>
                <p className='text-[#333] text-lg text-center font-bold'>Sat</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-white w-9 h-9 p-3 flex justify-center items-center rounded-full'>
                    <p className='text-[#6672B6] text-base font-bold'>8</p>
                </div>
                <p className='text-[#333] text-lg text-center font-bold'>Sun</p>
            </div>            
        </div>
    </div>
  )
}

export default Date