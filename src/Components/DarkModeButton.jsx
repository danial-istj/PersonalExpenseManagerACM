import React from 'react'

function DarkModeButton() {
  return (
    <div><button className='roboto-regular fixed z-20 top-[4px] border-none right-[115px]  text-black w-[50px] p-1 text-center rounded-[15%] hover:bg-gray-400 hover:text-bluet dark:text-white dark:hover:bg-bluebg dark:hover:text-bluet' onClick={toggleDarkMode}>{darkMode? "Light":"Dark"}  </button></div>
  )
}

export default DarkModeButton