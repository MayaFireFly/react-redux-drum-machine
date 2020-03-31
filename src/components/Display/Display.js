import React, { useState, useEffect } from 'react';
import './Display.css';
import PropTypes from 'prop-types';

const Display = (props) => {
  const [title, setTitle] = useState('Display a title of sound'); 

  useEffect(
    () => {
      for(let prop in props.pads){
        if(props.pads[prop].active){
          setTitle(props.pads[prop].title);
        }
      }
    }, 
    [props]
  );

  return <div className='Display' id='display'>
    {title}
  </div>;
};

Display.propTypes = {
  pads:PropTypes.object.isRequired
};

export default Display;