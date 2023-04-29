import React from 'react'

function Board() {
  return (
    <div className='flex bg-white border-4 border-[#A4A9C0] rounded-3xl p-3 justify-between lg:justify-around'>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-[#a3a3ff] font-semibold'>Today's goal</h2>
                <div className="progress-bar scale-90">
                    <progress value="70" max="100" className="hidden h-0 w-0">70%</progress>
                </div>
            </div>
            <div className='flex flex-col text-left text-[#333] font-medium ml-4 text-[14.7px] justify-center'>
                <h2 className='text-xl mb-1 font-bold'>Excellent!</h2>
                <p>You're almost there</p>
                <p>Finish the goal to achieve</p>
                <p>&#128293; <span className='text-orange-400'>10</span></p>
            </div>
        </div>
  )
}

export default Board