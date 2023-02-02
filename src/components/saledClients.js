import React from 'react';

export default function SaledClients() {
  
  const openList = (e) => {
    console.log("salom");
    console.log(e.target.name);
    const list = document.getElementById(e.target.name);
    if(list.style.height === 0) {
      list.style.height = '300px';
    } else {
      list.style.height = 0;
    }
  }

  return (
    <div className='saled_clients'>
      <div className='saled_wrap'>
        <div className='saled_header'>
          <div className='card_name'>Mahsulotlar</div>
          <div className='types_number'>
            <div>
              140
            </div>
            <div className='text_BCBCBC'>
              toifa
            </div>
          </div>
          <div className='date_look'>bugun</div>
          <div className='get_report'>hisobot</div>
        </div>        
        <div onClick={() => {
          document.getElementById('Abdulloh1').offsetHeight === 0?
            document.getElementById('Abdulloh1').style.height = 'auto'
              :
            document.getElementById('Abdulloh1').style.height = 0
          }} className='saled_product'>
          <div className='product_stamp'>
            Abdulloh
          </div>
          <div className='product_name'>
            Abdulloh            
          </div>          
          <div className='product_amount'>
            2023.2.2 - 8:6            
          </div>
          <div className='product_price'>
            1
            <div className='text_BCBCBC'>
              xarid
            </div>
          </div>
        </div>
        <div id='Abdulloh1' className='product_list'>
          <div className='date'>
            2023.2.2 - 8:6
          </div>
          <div className='product'>
            Travertin 01
            <div>
              1 paqir
            </div>
          </div>
          <div className='product'>
            Travertin 01
            <div>
              1 paqir
            </div>
          </div>
          <div className='product'>
            Travertin 01
            <div>
              1 paqir
            </div>
          </div>
          <div className='product'>
            Travertin 01
            <div>
              1 paqir
            </div>
          </div>
          <div className='product'>
            Travertin 01
            <div>
              1 paqir
            </div>
          </div>
          <div className='product'>
            Travertin 01
            <div>
              1 paqir
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}