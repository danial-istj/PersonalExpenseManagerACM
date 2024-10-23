import React from 'react'
import DashboardLTDivs from './DashboardLTDivs'
import DashboardLBDivs from './DashboardLBDivs'
import DashboardRDiv from './DashboardRDiv'

function DashboardContent() {
  return (
    <div className='w-100 grid grid-col-1 md:grid-cols-4 border-green mt-[40px] ml-[40px] dark:bg-black'>
      <div className='col-span-3 border-r  border-1 border-black dark:border-darkborder  '>
        <DashboardLTDivs/>
        <DashboardLBDivs/>
      </div>
      <div className='col-span-1 p-3'>
        <DashboardRDiv/>
      </div>
    </div>
  )
}
 
export default DashboardContent
 