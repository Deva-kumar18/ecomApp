import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()
  const handlecliclk = ()=>{
     navigate("/products")
  }
  return (
    <div className='sideContainer'>
        <button className='load-btn' onClick={handlecliclk}>load products</button>
    </div>
  )
}

export default Sidebar