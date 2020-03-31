import React from 'react';
import ReactDOM from 'react-dom';
import Display from '../components/Display/Display';

describe('Display', () => {
  const pads = {
    Q: {
      active: false,
      key: 81,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      title: 'Cev_H2' 
    },
    W: {
      active: false,
      key: 87,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      title: 'RP4_KICK_1'
    },
    E: {
      active: false,
      key: 69,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      title: 'Kick_n_Hat'     
    },
    A: {
      active: false,
      key: 65,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      title: 'Dsc_Oh'    
    },
    S: {
      active: false,
      key: 83,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      title: 'Heater-6'     
    },
    D: {
      active: false,
      key: 68,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      title: 'Heater-4_1'   
    },
    Z: {
      active: false,
      key: 90,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      title: 'Heater-3'      
    },
    X: {
      active: false,
      key: 88,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      title: 'Heater-2'      
    },
    C: {
      active: false,
      key: 67,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      title: 'Heater-1'  
    }
  };
  
  it('render Display without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display pads={pads}/>, div);
  });       
});