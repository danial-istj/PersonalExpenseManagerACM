import React from 'react'
import { FaArrowRight, FaPauseCircle } from 'react-icons/fa'
import { tasksData } from '../Data/TasksData'

function Tasks() {
  return (
    <div className='text-center justify-left  grid roboto-regular bg-gray-300 hover:bg-gray-400 rounded-[5%] gap-4 p-3 dark:bg-darkdivbg dark:hover:bg-darkdivbghover h-full'>

        <h2 className='text-[20px] text-left dark:text-white flex items-center'>Today's Tasks <span className='text-bluet text-[15px] flex items-center pl-20  pt-0'>Manage {<FaArrowRight className='pl-1'/>}</span></h2>

        {tasksData.map((e)=>{
            return(
                <div className='flex items-center bg-gray-200 rounded-[3%] p-3 dark:bg-darkdivbginner'><div className='bg- shadow-red-600  text-[40px] mr-3 text-red-600'>{<FaPauseCircle/>}</div><span className='text-black dark:text-white text-left'><h3 className='text-[15px]'>{e.heading}</h3><h4 className='text-[12px] text-bluet'>{e.component}</h4></span></div>
            )
        })}

        
    </div>
  )
}

export default Tasks