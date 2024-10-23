import React from 'react'
import DashboardProjects from './DashboardProjects'
import ProjectsHeadingBar from './ProjectsHeadingBar'

function DashboardLBDivs() {
  return (
    <div className='roboto-regular'>
        <ProjectsHeadingBar/>
        <DashboardProjects/>
    </div>
  )
}

export default DashboardLBDivs