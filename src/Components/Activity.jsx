import React from 'react'
import {  FaEllipsisV } from 'react-icons/fa'
import { activityData } from '../Data/ActivityData'

function Activity() {
  return (
    <div className='bg-gray-300 hover:bg-gray-400 rounded-md p-2 dark:bg-darkdivbg dark:hover:bg-darkdivbghover text-black dark:text-white roboto-regular'>
        <div className='flex items-center justify-between text-black dark:text-white'><h3>Activity </h3><span className='text-end'>{<FaEllipsisV/>}</span></div>

        <div className='mb-2 text-black dark:text-white text-[25px]'> 70%</div>

        <div className='grid grid-cols-5 gap-2 bg-none'>
         {activityData.map((e)=>{
            return(
                
                    <div className='col-span-1 bg-gray-200 rounded-md min-h-[150px] flex items-end dark:bg-darkdivbginner'>
              <div className="w-full bg-slate-500 rounded-b-md " style={{ height: `${e.percentage}%` }} 
          >
            <div className="text-center text-black dark:text-white">{e.percentage}% </div>
            <div className="text-center dark:text-white text-black">{e.day} </div>

          </div>
        </div>
                
                
            )
          })}

            
        </div>
   
    </div>
  )
}

export default Activity