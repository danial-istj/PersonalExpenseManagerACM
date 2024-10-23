import React from 'react'
import { FaArrowRight, FaDiscord } from 'react-icons/fa'
import { meetingsData } from '../Data/MeetingsData'

function Meetings() {
  return (
    <div className='bg-gray-300 hover:bg-gray-400 dark:bg-darkdivbg dark:hover:bg-darkdivbghover p-3 rounded-[5%] roboto-regular h-full'>

<h2 className='mb-5 text-[20px] text-left dark:text-white flex items-center'>Today's Meetings <span className='text-bluet text-[15px] flex items-center pl-12  pt-0'>View All {<FaArrowRight className='pl-1'/>}</span></h2>
     
<div className='bg-none grid grid-cols-2 gap-4'>


    { meetingsData.map((e)=>{
        return(
          
            <div className='bg-gray-200 dark:bg-darkdivbginner rounded-[5%] p-2'>
            <div className='flex items-center justify-between'>
              <h3 className='text-[18px] text-black dark:text-white hover:text-red-600 dark:hover:text-red-600'>{e.time}</h3>
              <span className='text-slate-400 p-1 rounded-full text-[25px]'>
                <FaDiscord />
              </span>
            </div>
            <p className='text-[12px] mt-2 dark:text-white hover:text-red-600 dark:hover:text-red-600'>{e.component}</p>
          </div>
            

        )
     })
    }
     </div>
</div>


  )
}

export default Meetings