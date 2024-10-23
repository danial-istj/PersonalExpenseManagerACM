import React from 'react'
import ProjectsLDiv from './ProjectsLDiv'
import ProjectsRDiv from './ProjectsRDiv'
function ProjectsContent() {
  return (
    <div className='mt-[40px] ml-[40px] flex'>
        <ProjectsLDiv/>
        <ProjectsRDiv/>
    </div>


  )
}

export default ProjectsContent