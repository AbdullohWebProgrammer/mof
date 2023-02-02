import React from 'react';
import './navbar.css';
import calendar from '../resources/calendar.svg';
import pulse from '../resources/pulse.svg';

export default function Navbar() {          
  return (
    <div className='navbar'>
      <div className='navbar_wrap'>
        <div className='text_wrap'>
          <h2 className='greeting'>Hayrli tong, Abdulloh</h2>
          <h4 className='instruction'>Bugungi sodir bo'layotgan jarayon</h4>
        </div>
        <div className='buttons_wrap'>
        <div className='actions'>
          <img src={pulse} alt='actions'/>
        </div>
        <div className='calendar'>
          <img src={calendar} alt='calendar'/>
        </div>
        </div>
      </div>
    </div>
  );
}