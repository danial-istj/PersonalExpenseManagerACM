import React from 'react'
import { FaPauseCircle } from 'react-icons/fa'

function ColorPalette() {
  return (
    <div className='text-center grid grid-rows-3 grid-flow-col justify-center align-middle roboto-regular bg-gray-300 hover:bg-gray-400 rounded-[5%] gap-3 p-3 dark:bg-darkdivbg dark:hover:bg-darkdivbghover h-full'>
        <h2 className='text-[24px] dark:text-white '>Colour Palette Selection</h2>
        <div className='shadow-red-600 m-auto text-[60px]  text-red-600'>{<FaPauseCircle/>}</div>
        <div className='grid grid-cols-2 gap-3 align-middle justify-center'>
            <div className='text-[15px] bg-gray-200 rounded-[5%] dark:bg-darkdivbginner dark:text-white'>Today</div>
            <div className='text-[15px] bg-gray-200 rounded-[5%] dark:bg-darkdivbginner dark:text-white'>Limits</div>
        </div>
    </div>
  ) 
}

export default ColorPalette 