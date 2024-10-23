import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { projectsWorked } from '../Data/ProjectsWorkedData';
import { Pie, PieChart, Cell } from 'recharts';

function ProjectsWorked() {
  return (
    <div className='bg-gray-300 hover:bg-gray-400  rounded-md p-2 dark:bg-darkdivbg dark:hover:bg-darkdivbghover text-black dark:text-white roboto-regular'>
      <div className='flex items-center justify-between text-black dark:text-white '>
        <h3>Projects Worked</h3>
        <span className='text-end'>{<FaEllipsisV />}</span>
      </div>
      
      <div className='flex justify-center items-center min-h-[200px]  '>
        <PieChart width={200} height={200} >
          <Pie 
            data={projectsWorked}
            dataKey="percentage"
            nameKey="heading"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60} 
            label  
          >
            {projectsWorked.map((e) => (
              <Cell fill={e.colors} />  
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}

export default ProjectsWorked;
