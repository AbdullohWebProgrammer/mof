import React, { useState } from 'react';
import { useStateValue } from '../StateProvider';
import './header.css';
import fullscreen from '../resources/fullscreen.svg';
import exitfullscreen from '../resources/exitfullscreen.svg';
import nightmode from '../resources/nightmode.svg';

export default function Header() {   
  const [{menu}, dispatch] = useStateValue();  
  const [full, setFull] = useState(false);
  
  const openMenu = () => {
    let sideBar = !menu? 320:100;
    document.documentElement.style.setProperty('--sideBar', `${sideBar}px`);
  }

  const openFullscreen = () => {
    setFull(!full);
    var elem = document.body;    

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }

    if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
  }

  return (
    <div className='header'>
      <div className='header_wrap'>
        <div className='menu_button' onClick={() => {
          dispatch({
            type: 'OPEN_MENU',
            item: !menu
          });
          openMenu();
          console.log(menu);
        }}>
          <div style={{width: menu? '30px':''}}/>
          <div style={{width: menu? '50px':''}}/>
          <div style={{width: menu? '20px':''}}/>
        </div>
        <img src={nightmode} width='40px' alt='night_mode'/>
        <img src={full? exitfullscreen:fullscreen} onClick={() => openFullscreen()} width='40px' alt='full_screen'/>
      </div>
    </div>
  );
}