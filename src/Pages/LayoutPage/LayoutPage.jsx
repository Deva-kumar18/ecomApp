import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavBar from '../navbar/NavBar'
import Content from '../Content/Products'
import ProductsPage from '../Products/ProductsPage'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
  return (
    <div className='layoutContainer'>
        <Sidebar/>
        <NavBar/>
        <div className='l-content'><ProductsPage/></div>
    </div>
  )
}

export default LayoutPage