import React from 'react';
import MovedProducts from './movedProducts';
import ProductBoard from './productBoard';
import StorageCard from './storageCard';
import './storage.css';

export default function Storage() {          
  return (
    <div className='storage'>
        <ProductBoard/>
        <MovedProducts/>
        <StorageCard/>
    </div>
  );
}