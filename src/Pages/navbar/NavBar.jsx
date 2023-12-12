import React from 'react'
import cart from '../../Assets/add-cart.png'
import search from '../../Assets/searchhh.png'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {
  const navigate = useNavigate()
  const cartpage =()=>{
    navigate("/cartpage")
  }
  return (
    <div className='navbarContainer'>
        <div className='input-ds'><img  className='s-icon' src={search}/><input className='input' placeholder='search...' type='text'/></div>
        <img className='cart-img' onClick={cartpage} src={cart}/>
        
    </div>
  )
}

export default NavBar