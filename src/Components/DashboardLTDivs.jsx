import React from 'react'
import ColorPalette from './ColorPalette'
import Tasks from './Tasks'
import Meetings from './Meetings'

function DashboardLTDivs() {
  return (
    <div className='bg-white dark:bg-black grid grid-cols-1 md:grid-cols-3 gap-4   px-3 py-5'>
    <div><ColorPalette/></div>
    <div><Tasks/></div>
    <div><Meetings/></div>
    </div>
  )
}

export default DashboardLTDivs