import React from 'react';
import './Pad.css';
import PropTypes from 'prop-types';

const Pad = (props) => {
  const startAudio = (elem) => {
    elem.style.backgroundColor = '#744FC6';     
    const audio = elem.children[0];  
    props.setActive(props.text);  
    audio.play();       
    setTimeout(()=>{
      elem.style.backgroundColor = '#4FB0C6';    
    }, 150);   
  };  

  return <div className='App_border drum-pad App__row' 
    id={props.id} 
    onClick={(e)=>startAudio(e.target)}>

    {props.text}

    <audio src={props.pads[props.text].src} id={props.text} className='clip' preload='metadata'>
      Your browser does not support the <code>audio</code> element.
    </audio>

  </div>;
};

Pad.propTypes = {
  text:PropTypes.string.isRequired,
  id:PropTypes.string.isRequired,
  pads:PropTypes.object.isRequired
};

export default Pad;