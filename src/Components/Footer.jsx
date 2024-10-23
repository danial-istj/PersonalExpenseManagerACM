import React from 'react'
import { footerData } from '../Data/FooterData';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div >
      <ul className=' bottom-0 bg-gray-300 minx-h-[40px] my-0  border-b border-black grid grid-cols-1 md:grid-cols-4 w-full justify-end items-center end-0 gap-3 pr-3 dark:bg-black dark:border-darkborder px-[45px] p-5 border-t'>

        
      {footerData.map((e) => {
  return (
    <li className='bg-gray-200 rounded-sm p-2 text-center flex flex-col hover:bg-gray-400 dark:bg-darkdivbginner dark:hover:bg-darkdivbghover h-full'>
      <h3 className='roboto-bold text-black dark:text-white'>{e.heading}</h3> 
      <p className='roboto-regular text-[15px] text-black dark:text-white'>{e.description}</p>
    </li>
  );
})}
     <li className='bg-gray-200 rounded-sm p-2 text-center hover:bg-gray-400 dark:bg-darkdivbginner dark:hover:bg-darkdivbghover h-full'>

     <a href='https://www.linkedin.com/in/danial3' ><div className='text-black dark:text-white roboto-regular text-[15px] flex items-center justify-start mt-2'>
    <FaLinkedin className="mr-2 text-[25px]" /> LinkedIn
  </div></a>

 

  <a href='https://www.instagram.com/' > <div  className='text-black dark:text-white roboto-regular text-[15px] flex items-center justify-start mt-2'>
    <FaInstagram className="mr-2 text-[25px]" /> Instagram
  </div></a>


  

  <a href='https://www.linkedin.com/in/danial3' ><div className='text-black dark:text-white roboto-regular text-[15px] flex items-center justify-start mt-2'>
    <FaGithub className="mr-2 text-[25px]" /> GitHub
  </div></a>

  
  
</li>


           
      </ul>
    </div>
  
  )}


export default Footer 