import React from 'react';
import { projectsRTDivData } from '../Data/ProjectsRTDivData';
import { FaEllipsisV } from 'react-icons/fa';
import DashboardProjects from './DashboardProjects';
import ProjectsHeadingBar from './ProjectsHeadingBar';

function ProjectsRDiv() {
  return (
    <div className=' w-screen ml-[-250px] md:ml-0 flex flex-col roboto-regular dark:bg-black'>
      {projectsRTDivData.map((e)=>{
        return(
            <div className='mx-auto bg-gray-300 rounded-md flex p-4 mt-4 flex-col gap-4 md:w-[700px] dark:text-white text-black dark:bg-darkdivbg dark:hover:bg-darkdivbghover'>
                <div className='text-[25px] flex justify-between items-center'><div>{e.heading}</div><div className='text-[15px]'>{<FaEllipsisV/>}</div></div>
                <div className='text-[15px] max-w-80'>{e.description}</div>
                <div className='text-[10px]'>{e.time}</div>
            </div>
        )
      })}

        <ProjectsHeadingBar/>
        <DashboardProjects/>
    </div>
  );
}

export default ProjectsRDiv;
