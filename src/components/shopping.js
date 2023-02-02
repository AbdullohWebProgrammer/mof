import React from 'react';
import ProductBoard from './productBoard';
import SaledClients from './saledClients';
import SaledProducts from './saledProducts';
import './shopping.css';

export default function Shopping() {          
  return (
    <div className='shopping'>
        <ProductBoard/>
        <SaledProducts/>
        <SaledClients/>
    </div>
  );
}