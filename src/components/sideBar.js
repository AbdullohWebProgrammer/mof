import React from 'react';
import './sideBar.css';
import logo from '../resources/logo.svg';
import dashboard from '../resources/dashboard.svg';
import shopping from '../resources/shopping.svg';
import storage from '../resources/storage.svg';
import rightarrow from '../resources/rightarrow.svg';
import { useStateValue } from '../StateProvider';

export default function SideBar() {
  const [{ menu }, dispatch] = useStateValue();  

  const openMenu = () => {
    let sideBar = window.innerWidth < 500? !menu? window.innerWidth: 0:!menu? 320:100;
    document.documentElement.style.setProperty('--sideBar', `${sideBar}px`);
    dispatch({
      type: 'OPEN_MENU',
      item: !menu
    });
  }

  return (
    <div className='sideBar'>
      <div className='wrap'>
        <img className='closer' onClick={() => openMenu()} src={rightarrow} alt='rightarrow'/>
        <img className='logo' src={logo} width='80px' alt='logo'/>
        <div class="title-wrapper">
          <h1 class="sweet-title">
            <span>Moviy omad fayz</span>            
          </h1>
        </div>
        <ul className='sections'>
          <h3 className={menu? '':'hide'}>Bo'limlar</h3>
          <a href='/'>
            <li className={menu? '':'active'}><img src={dashboard} className={menu? '':'active'} width='15' alt='logo'/>{menu? 'Asosiy':''}</li>
          </a>
          <a href='/shopping'>
            <li className={menu? '':'active'}><img src={shopping} className={menu? '':'active'} width='18' alt='logo'/>{menu? 'Savdo':''}</li>
          </a>
          <a href='/storage'>
            <li className={menu? '':'active'}><img src={storage} className={menu? '':'active'} width='15' alt='logo'/>{menu? 'Ombor':''}</li>
          </a>
        </ul>
      </div>
    </div>
  );
}