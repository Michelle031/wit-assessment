import React from 'react'
import Date from './Date'
import { EllipsisHorizontalIcon as Dots} from "@heroicons/react/24/solid"
import speaker from "../images/voice.png"
import book from "../images/book.png"
import headset from "../images/headset.png"
import write from "../images/paper.png"
import Skill from './Skill'

function Learn() {
  return (
    <div className='min-h-screen bg-[#F6F8FE] pt-8 pb-24 px-6 space-y-10'>
        <Date />
        <div>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl text-[#333] font-bold'>Skills</h2>
                <Dots className='h-9 w-10 text-[#6672B6]'/>
            </div>
            <div className='mt-8 grid grid-cols-2 grid-rows-2 gap-6'>
              <Skill title={"Reading"} completed={true} percent={"100%"} img={book} />
              <Skill title={"Writing"} completed={false} percent={"85%"} img={write} />
              <Skill title={"Speaking"} completed={true} percent={"100%"} img={speaker} />
              <Skill title={"Listening"} completed={false} percent={"70%"} img={headset} />
            </div>
        </div>
    </div>
  )
}

export default Learn