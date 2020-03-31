import React from 'react';
import ReactDOM from 'react-dom';
import Pad from '../components/Pad/Pad';

describe('Pad', () => {
  it('render Pad without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Pad id='pad_id' text='pad_text'/>, div);
  });       
});