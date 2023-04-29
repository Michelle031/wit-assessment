import React from 'react'

function Header() {
  return (
    <header className='mt-2 flex justify-between'>
            <div>
                <h4 className='text-base text-gray-800 font-bold'>Hello Rachel,</h4>
                <h2 className='text-orange-400 text-xl font-bold -mr-[0.5px]'><span className='text-[#9BA2C1]'>Ready to</span> play English?</h2>
            </div>
            <div className='flex justify-between items-center space-x-2 bg-[#fbfbff] py-1 px-3 rounded-full'>
                <div className='w-6 h-6 border-2 p-2 flex items-center justify-center rounded-full border-orange-500'>
                    <p className='text-sm scale-95'>&#128293;</p>
                </div>
                <p className='text-[15px] text-gray-800'>85</p>
            </div>
    </header>
  )
}

export default Header