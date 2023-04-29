import React from 'react'
import Header from './Header'
import Board from './Board'
import { ChevronRightIcon as Right} from "@heroicons/react/20/solid"
import Card from './Card'
import speech from "../images/speech.png"
import vocab from "../images/vocab.png"
import one from "../images/one.jpg"
import two from "../images/two.jpg"
import Person from './Person'

function Home() {
  return (
    <div className='min-h-screen bg-[#F6F8FE] pt-8 pb-20 px-6 space-y-10'>
        <Header />
        <Board />
        <div>
            <div className='w-full flex justify-between items-center'>
                <h2 className='text-xl text-[#333] font-bold'>Your lesson</h2>
                <div className='p-[0.6px] border-[2px] border-[#6672B6] rounded-md flex items-center justify-center'>
                    <Right className='h-5 w-5 text-[#6672B6] font-bold'/>
                </div>
            </div>
            <div className='overflow-x-scroll flex space-x-6 items-center mt-4 slider'>
                <Card img={speech} title={"Speaking 101"} days={"30"}/>
                <Card img={vocab} title={"New words"} days={"90"}/>
                <Card img={speech} title={"Speaking 101"} days={"30"}/>
                <Card img={vocab} title={"New words"} days={"90"}/>
            </div>
        </div>
        <div>
            <div className='w-full flex justify-between items-center'>
                <h2 className='text-xl text-[#333] font-bold'>Leaderboard</h2>
                <div className='p-[0.7px] border-[2px] border-[#6672B6] rounded-md flex items-center justify-center'>
                    <Right className='h-5 w-5 text-[#6672B6] font-bold'/>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center space-y-5 mt-4'>
                <Person name={"Yasmine Lee"} streak={"1230"} img={one} location={"Taiwan"} />
                <Person name={"Guy Hawkins"} streak={"1130"} img={two} location={"Spain"} />
                <Person name={"Yasmine Lee"} streak={"1230"} img={one} location={"Taiwan"} />
                <Person name={"Guy Hawkins"} streak={"1130"} img={two} location={"Spain"} />
                
            </div>
        </div>
    </div>
  )
}

export default Home