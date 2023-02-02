import React from 'react';
import './dashboard.css';
import MovedProducts from './movedProducts';
import SaledClients from './saledClients';
import SaledProducts from './saledProducts';
import StorageCard from './storageCard';

export default function Dashboard() {          
  return (
    <div className='dashboard'>
        <div className='static_cards'>
            <div>
                static_cards
            </div>
        </div>
        <div className='static_cards'>
            <div>
                static_cards
            </div>
        </div>
        <div className='static_cards'>
            <div>
                static_cards
            </div>
        </div>
        <div className='static_cards'>
            <div>
                static_cards
            </div>
        </div>
        <SaledProducts/>
        <SaledClients/>
        <MovedProducts/>
        <StorageCard/>
    </div>
  );
}