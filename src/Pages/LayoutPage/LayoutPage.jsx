import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavBar from '../navbar/NavBar'
import Content from '../Content/Content'

const LayoutPage = () => {
  return (
    <div className='layoutContainer'>
        <Sidebar/>
        <NavBar/>
        <div className='l-content'><Content/></div>
    </div>
  )
}

export default LayoutPage