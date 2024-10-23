import React, { useState } from 'react';
import { projectsLdivData } from '../Data/ProjectsLDivData';
import { FaCircle } from 'react-icons/fa';
import { FaArrowsLeftRight } from 'react-icons/fa6';

function ProjectsLDiv() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex min-h-screen min-w-[250px] max-w-[250px] gap-0 bg-none roboto-regular   ">
      <div
        className={`w-[100%] min-h-screen p-2 transition-transform duration-300 
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 block md:w-[100%] bg-gray-300 roboto-regular dark:bg-darkdivbg border-r border-black dark:border-darkborder`}
      >
        {projectsLdivData.map((e) => {
          return (
            <div  className='flex items-center mt-4 text-black hover:text-bluet dark:text-white dark:hover:text-bluet hover:bg-gray-400 dark:hover:bg-darkdivbghover p-2 rounded-md'>
              <div className='text-[10px]'>{<FaCircle />}</div>
              <div className='ml-2 text-[15px]'>{e.heading}</div>
            </div>
          );
        })}
      </div>


      <button
        onClick={toggleMenu}
        className="h-[30px] w-[10%] p-1 flex items-center justify-center text-black hover:text-bluet dark:text-white dark:hover:text-bluet md:hidden absolute top-10 right-0 "
      >
        <FaArrowsLeftRight />
      </button>
    </div>
  );
}

export default ProjectsLDiv;
