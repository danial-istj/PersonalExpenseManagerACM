import React from 'react'
import { dpDaysData } from '../Data/DPDaysData'

function DashboardProjects() {
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
    <div className='grid grid-cols-2 md:grid-cols-5 bg-white dark:bg-black  '>
        



         {dpDaysData.map((e)=>{
            return(
            <div className='col-span-1 bg-gray-300 border-black border-r last:border-none dark:border-darkborder dark:text-white dark:bg-black'>
               <h3 className=' border-b border-black dark:border-darkborder pl-1
                text-start'>
                   {e.day}
                   </h3>
                   {e.components.map((f)=>{
                    return(
                      <div className='bg-gray-200 hover:bg-gray-400 m-2 rounded-sm p-1 dark:bg-darkdivbg dark:hover:bg-darkdivbghover shadow-md hover:shadow-xl hover:scale-105 transition duration-300 '>
                            <h4 className='flex items-center roboto-bold text-[16px]'>
                   
                    <span className={` w-6 h-6 rounded-full mr-2 ${getStatusColorClass(f.status)}`}>&#8226;</span>
                    <span className={getStatusColorClass(f.status)}>{f.status}</span>
                  </h4>
                            <div className='text- roboto-bold'>{f.heading}</div>
                            <p className='text-[15px]'>{f.description}</p>
                        </div>
                    )
                   })}           
                   </div>

            )
         })}   
        
        


    </div>
  )
}

export default DashboardProjects