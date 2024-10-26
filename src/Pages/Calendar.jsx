import React, { useState } from 'react'
import Header from '../Components/Header'
import SideBar from '../Components/SideBar'
import './Calendar.css'
import CalendarContent from '../Components/CalendarContent';
import Footer from '../Components/Footer';

function Calendar() {

    const [darkMode,setDarkMode]=useState(false);
    const toggleDarkMode=()=>{
        setDarkMode(!darkMode);
    }

  return (
    <div className={` bg-white dark:bg-black ${darkMode ? "" : "dark"}`}>
    <button className='roboto-regular fixed z-20 top-[4px] border-none right-[115px]  text-black w-[50px] p-1 text-center rounded-[15%] hover:bg-gray-400 hover:text-bluet dark:text-white dark:hover:bg-bluebg dark:hover:text-bluet' onClick={toggleDarkMode}>{darkMode? "Dark":"Light"}  </button>
      <Header/>
      <SideBar/>
      <CalendarContent/>
      <Footer/>

    
    </div>
  )
}

export default Calendar
