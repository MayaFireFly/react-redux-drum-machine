import React from 'react';
import './Toggler.css';

const Toggler = () => {
  const changeActive = (elem) => {
    const togglerBtns = elem.parentNode.children;
    for(let btn_idx = 0; btn_idx < togglerBtns.length; btn_idx++){
      if(togglerBtns[btn_idx].classList.contains('Toggler__ball_active')){
        togglerBtns[btn_idx].classList.remove('Toggler__ball_active');    
      }  
    };
    elem.classList.add('Toggler__ball_active');     
  };

  return <div className='App_border Toggler App__row'>   
    <div className='App_border Toggler__ball Toggler__ball_active' onClick={(e)=>changeActive(e.target)}></div>
    <div className='App_border Toggler__ball' onClick={(e)=>changeActive(e.target)}></div>
  </div>;
};

export default Toggler;