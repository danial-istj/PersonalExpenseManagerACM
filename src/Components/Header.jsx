import React from 'react'
import { FaBell} from 'react-icons/fa';
import mypic from '../Images/about.jpg';

function Header() {
    
  return (



    
    <div className='z-10 fixed'>
      <ul className='ml-[40px] top-0 bg-gray-300 max-h-[40px] fixed border-b border-black flex flex-row w-full justify-end items-center end-0 gap-3 pr-3 dark:bg-black dark:border-darkborder'>
        
        <li><HeaderIcon icon={<FaBell/>}></HeaderIcon></li>
        <li> 
          <div className='rounded-full h-9 w-9 border-[3px] border-green-600 m-auto'>
            <img src={mypic} alt="My Pic" className="h-full w-full  rounded-full " />
          </div>
        </li>    
      </ul>
    </div>
  )
}

const HeaderIcon = ({icon})=>(
    <div className='relative flex items-center justify-center h-10 w-10 p-0 mb-1 rounded-[25%]  hover:bg-gray-400 hover:text-bluet dark:bg-black dark:text-white dark:hover:bg-bluebg dark:hover:text-bluet'>
        {icon}
    </div>
    );

export default Header
