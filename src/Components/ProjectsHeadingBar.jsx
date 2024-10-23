import React from 'react'
import { FaFilter } from 'react-icons/fa'

function ProjectsHeadingBar() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-6 gap-2 p-2 border-y mt-3 border-black dark:border-darkborder'>
            <div className='col-span-1 ml-5'><h3 className='flex items-center text-[25px] text-black dark:text-white'>Projects</h3></div>
            <div className='col-span-1 rounded-md m-auto p-1 px-3 flex items-center bg-gray-300 hover:bg-gray-400 dark:bg-darkdivbg dark:hover:bg-darkdivbghover dark:text-white'>       
                 <button className='text-[20px] text-black dark:text-white'>Filter</button><span className='pl-3'>{<FaFilter/>}</span>
            </div>
            <div className='col-span-4 w-[100%] mx:auto md:mr-8 items-center flex justify-end'>
                <ul className='flex  items-center  justify-end text-[15px] gap-1 md:gap-4 text-black'>
            <li className=' bg-gray-300 p-1 px-2 rounded-md hover:bg-gray-400 dark:bg-darkdivbg dark:hover:bg-darkdivbghover dark:text-white '>Today</li>
            <li className=' bg-gray-300 p-1 px-2 rounded-md hover:bg-gray-400 dark:bg-darkdivbg dark:hover:bg-darkdivbghover dark:text-white'>Week</li>
            <li className=' bg-gray-300 p-1 px-2 rounded-md hover:bg-gray-400 dark:bg-darkdivbg dark:hover:bg-darkdivbghover dark:text-white'>Month</li>
            <li className=' bg-gray-300 p-1 px-2 rounded-md hover:bg-gray-400 dark:bg-darkdivbg dark:hover:bg-darkdivbghover dark:text-white'>Year</li>
         </ul>
         </div>
        </div>
  )
}

export default ProjectsHeadingBar