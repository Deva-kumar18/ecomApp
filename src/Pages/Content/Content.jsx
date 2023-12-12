import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { products} from '../../features/Cart/CartSlice';
import { createReducer } from '@reduxjs/toolkit';

const Content = () => {
  const data = useSelector((state) => state.cartSlice.cart);
  console.log(data)

  return (
    <div className='content'>
      <ul className='product-show'>
        {data.map(product => (
          <li key={product.id}>
           <div className='item'>
           <li><img className='img' src={product.image}/></li>
            <li>{product.title}</li>
            <li>{product.price}</li></div> 
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
