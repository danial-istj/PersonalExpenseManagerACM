import React from 'react'
import { remaindersData } from '../Data/RemaindersData'
import { FaEllipsisV } from 'react-icons/fa'

function Remainders() {
    const getStatusColorClass = (status) => {
        switch (status) {
          case 'Low':
            return 'text-green-500';  
          case 'Medium':
            return 'text-yellow-500'; 
          case 'High':
            return 'text-red-500';    
          case 'Done':
            return 'text-blue-500';  
          default:
            return 'text-gray-500';   
        }
      };
  return (
    <div className='bg-gray-300 hover:bg-gray-400 rounded-md p-2 dark:bg-darkdivbg dark:hover:bg-darkdivbghover text-black dark:text-white roboto-regular'>
        <div className='flex items-center justify-between text-black dark:text-white'><h3>Remainders </h3><span className='text-end'>{<FaEllipsisV/>}</span></div>

        

        <div className='grid grid-flow-row gap-2 bg-none'>
         {remaindersData.map((e)=>{
            return(
                
                    <div className='bg-gray-200 rounded-md p-2 mt-2 dark:bg-darkdivbginner '>
                        <div><h3>{e.time}</h3>
                        <span className={` w-6 h-6 rounded-full mr-2 ${getStatusColorClass(e.status)}`}>&#8226;</span>
                    <span className={getStatusColorClass(e.status)}>{e.status}</span></div>
                        
                        <div className='text-[15px] '>{e.subtitle}</div>

                    </div>
                
                
            )
          })}

            
        </div>
   
    </div>
  )
}

export default Remainders