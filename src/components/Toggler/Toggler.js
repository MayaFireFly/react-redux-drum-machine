import React from 'react';
import './Toggler.css';

const Toggler = () => {
  const changeActiveClass = (elem) => {
    const togglerBtns = elem.parentNode.children;
    for(let btn_idx = 0; btn_idx < togglerBtns.length; btn_idx++){
      if(togglerBtns[btn_idx].classList.contains('Toggler__ball_active')){
        togglerBtns[btn_idx].classList.remove('Toggler__ball_active');    
      }  
    };
    elem.classList.add('Toggler__ball_active');     
  };

  const toggleVisibilityPads = (elem) => {    
    const padContainerRow = elem.parentNode.parentNode.parentNode.previousSibling.firstChild;    
    if(padContainerRow.style.display != 'none'){
      padContainerRow.style.display = 'none';
    }else{
      padContainerRow.style.display = 'flex';
    }
  };

  const changeActive = (elem) => {
    changeActiveClass(elem);
    toggleVisibilityPads(elem);     
  };

  return <div className='App_border Toggler App__row'>   
    <div className='App_border Toggler__ball Toggler__ball_active' onClick={(e)=>changeActive(e.target)}></div>
    <div className='App_border Toggler__ball' onClick={(e)=>changeActive(e.target)}></div>
  </div>;
};

export default Toggler;