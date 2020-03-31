import React from 'react';
import './Pad.css';
import PropTypes from 'prop-types';

const Pad = (props) => {
  return <div className='App_border drum-pad App__row' id={props.id}>
    {props.text}
    <audio src='' id={props.text} className='clip'/>
  </div>;
};

Pad.propTypes = {
  text:PropTypes.string.isRequired,
  id:PropTypes.string.isRequired
};

export default Pad;