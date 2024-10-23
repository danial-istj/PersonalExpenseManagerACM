import React from 'react'
import Activity from './Activity'
import ProjectsWorked from './ProjectsWorked'
import Remainders from './Remainders'

function DashboardRDiv() {
  return (
    <div className='py-2 grid grid-flow-row gap-5 '>
        <Activity/>
        <ProjectsWorked/>
        <Remainders/>
    </div>
  )
}

export default DashboardRDiv