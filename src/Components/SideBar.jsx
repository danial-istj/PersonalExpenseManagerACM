import React from 'react'
import { Link } from 'react-router-dom'
import { FaCalendar, FaDollarSign, FaF, FaFile, FaGear, FaGrip, FaMicrophone, FaMusic, FaPlus } from "react-icons/fa6";


function SideBar() {
  return (
    <div className='z-40 fixed'>
      <ul className=' top-0 left-0 max-w-[200px] border-r border-black h-screen fixed flex flex-col justify-between bg-gray-300 dark:bg-black dark:border-darkborder'>
        <li className='mb-2'><Link to={'/'}><SideBarIcon icon={<FaF />} /></Link></li>

        <li><Link to={'/'}><SideBarIcon icon={<FaGrip />} /></Link></li>
        <li><Link to={'/calendar'}><SideBarIcon icon={<FaCalendar />} /></Link></li>
        <li><Link to={'/income'}><SideBarIcon icon={<FaPlus />} /></Link></li>
        <li><Link to={'/projects'}><SideBarIcon icon={<FaFile />} /></Link></li>
        <li><Link to={'/expenses'}><SideBarIcon icon={<FaDollarSign />} /></Link></li>

        <li className='mt-60'><SideBarIcon icon={<FaMusic />} /></li>
        <li><SideBarIcon icon={<FaMicrophone/>} /></li>
        <li className='bottom-0'><SideBarIcon icon={<FaGear />} /></li>

      </ul>
    </div>
  )
}

const SideBarIcon = ({icon})=>(
<div className='relative flex items-center justify-center h-10 w-10 p-0 m-0 rounded-[25%] hover:bg-gray-400 hover:text-bluet dark:text-white dark:hover:bg-bluebg dark:hover:text-bluet'>
    {icon}
</div>
);

export default SideBar
