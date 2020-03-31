import React from 'react';
import ReactDOM from 'react-dom';
import Toggler from '../components/Toggler/Toggler';

describe('Toggler', () => {
  it('render Toggler without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Toggler/>, div);
  });       
});