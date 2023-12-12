import React from 'react'
import cart from '../../Assets/add-cart.png'
import search from '../../Assets/searchhh.png'

const NavBar = () => {
  return (
    <div className='navbarContainer'>
        <div className='input-ds'><img  className='s-icon' src={search}/><input className='input' placeholder='search...' type='text'/></div>
        <img className='cart-img' src={cart}/>
        
    </div>
  )
}

export default NavBar