import React, {useEffect, useState} from 'react';

export default function ProductBoard() {   
    let isDown = false;
    let check = false;
    let startX;
    let arrayX = [];    

    const end = () => {
	    isDown = false;        
    }

    const start = (e) => {
        isDown = true;        
        check = true;
        startX = e.pageX || e.targetTouches[0].pageX;
        arrayX = [];
        const category = document.getElementsByClassName('category');
        for(let i = 0; i < category.length; i++) {
            arrayX.push(category[i].offsetLeft);
        }
    }

    const setRoller = () => {
        const categories = document.getElementsByClassName('category');
        for(let i = 0; i < categories.length; i++) {
            categories[i].style.left = i * 200 + 'px';
        }
    }

    const move = (e) => {
        if(window.innerWidth > 500) e.preventDefault();
        const screenX = e.pageX || e.targetTouches[0].pageX;
        if(isDown) {
            const category = document.getElementsByClassName('category');
            const categories = document.querySelector('.categories');
            for(let i = 0; i < category.length; i++) {
                category[i].style.left = arrayX[i] + (screenX - startX) + 'px';
                if(category[i].offsetLeft < -200) {
                    category[i].style.left = category[i].offsetLeft + (category.length * 200) + 'px';
                }

                if(category[i].offsetLeft > categories.offsetWidth) {
                    category[i].style.left = category[i].offsetLeft - (category.length * 200) + 'px';
                }
            }
        }        
    }

    useEffect(() => {
        setRoller();        
    }, [])    

  return (
    <div className='product_board'>
        <div className='board_wrap'>
        <div
            className='categories'
            onMouseDown={(e) => start(e)}            
            onTouchStart={(e) => start(e)}
            onMouseMove={(e) => move(e)}            
            onTouchMove={(e) => move(e)}
            onMouseLeave={() => end()}
            onMouseUp={() => end()}
            onTouchEnd={() => end()}
        >
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
            <div className='category'><div><div className='product_mark'>Travertin</div><span>Travertin</span></div></div>           
        </div>
        <div className='product_wrap'>
            <div className='product'>
                <div className='product_mark'>01</div>
                <div className='product_name'>01</div>
                <div className='product_price'>95000 sum</div>
                <div className='product_amount'>1 paqir</div>
            </div>
            <div className='product'>
                <div className='product_mark'>01</div>
                <div className='product_name'>01</div>
                <div className='product_price'>95000 sum</div>
                <div className='product_amount'>1 paqir</div>
            </div>
            <div className='product'>
                <div className='product_mark'>01</div>
                <div className='product_name'>01</div>
                <div className='product_price'>95000 sum</div>
                <div className='product_amount'>1 paqir</div>
            </div>
            <div className='product'>
                <div className='product_mark'>01</div>
                <div className='product_name'>01</div>
                <div className='product_price'>95000 sum</div>
                <div className='product_amount'>1 paqir</div>
            </div>
            <div className='product'>
                <div className='product_mark'>01</div>
                <div className='product_name'>01</div>
                <div className='product_price'>95000 sum</div>
                <div className='product_amount'>1 paqir</div>
            </div>
            <div className='product'>
                <div className='product_mark'>01</div>
                <div className='product_name'>01</div>
                <div className='product_price'>95000 sum</div>
                <div className='product_amount'>1 paqir</div>
            </div>
            <div className='product'>
                <div className='product_mark'>01</div>
                <div className='product_name'>01</div>
                <div className='product_price'>95000 sum</div>
                <div className='product_amount'>1 paqir</div>
            </div>
            <div className='product'>
                <div className='product_mark'>01</div>
                <div className='product_name'>01</div>
                <div className='product_price'>95000 sum</div>
                <div className='product_amount'>1 paqir</div>
            </div>
            <div className='product'>
                <div className='product_mark'>01</div>
                <div className='product_name'>01</div>
                <div className='product_price'>95000 sum</div>
                <div className='product_amount'>1 paqir</div>
            </div>
            <div className='product'>
                <div className='product_mark'>01</div>
                <div className='product_name'>01</div>
                <div className='product_price'>95000 sum</div>
                <div className='product_amount'>1 paqir</div>
            </div>
            <div className='product'>
                <div className='product_mark'>01</div>
                <div className='product_name'>01</div>
                <div className='product_price'>95000 sum</div>
                <div className='product_amount'>1 paqir</div>
            </div>
            <div className='product'>
                <div className='product_mark'>01</div>
                <div className='product_name'>01</div>
                <div className='product_price'>95000 sum</div>
                <div className='product_amount'>1 paqir</div>
            </div>
            <div className='product'>
                <div className='product_mark'>01</div>
                <div className='product_name'>01</div>
                <div className='product_price'>95000 sum</div>
                <div className='product_amount'>1 paqir</div>
            </div>
            <div className='product'>
                <div className='product_mark'>01</div>
                <div className='product_name'>01</div>
                <div className='product_price'>95000 sum</div>
                <div className='product_amount'>1 paqir</div>
            </div>
            <div className='product'>
                <div className='product_mark'>01</div>
                <div className='product_name'>01</div>
                <div className='product_price'>95000 sum</div>
                <div className='product_amount'>1 paqir</div>
            </div>
            <div className='product'>
                <div className='product_mark'>01</div>
                <div className='product_name'>01</div>
                <div className='product_price'>95000 sum</div>
                <div className='product_amount'>1 paqir</div>
            </div>
        </div>
        </div>
    </div>
  );
}