import React from 'react';
import ReactDOM from 'react-dom';
import PadWrapper from '../components/PadWrapper/PadWrapper';

describe('PadWrapper', () => {  
  it('render PadWrapper without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PadWrapper pads={{}}/>, div);
  });       
});