import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { products} from '../../features/Cart/CartSlice';
import { createReducer } from '@reduxjs/toolkit';
import { Outlet } from 'react-router-dom';

const Products = () => {
  const data = useSelector((state) => state.cartSlice.cart);
  console.log(data)
 

  return (
    <div className='content'>
      <ul className='product-show'>
        {data.map(product => (
          <li key={product.id}>
           <div className='item'>
           <li><img className='img' src={product.image}/></li>
            <li className="des">{product.title}</li>
            <li className="des">{product.price}</li>
            <button className='add-btn'>add cart</button></div> 
            
            
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Products;
