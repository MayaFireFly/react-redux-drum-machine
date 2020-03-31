import React from 'react';
import './App.css';
import Pad from '../Pad/Pad';
import Display from '../Display/Display';
import Toggler from '../Toggler/Toggler';

const pads1 = [
  {btn: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'},
  {btn: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
  {btn: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
  {btn: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
  {btn: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
  {btn: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
  {btn: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
  {btn: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
  {btn: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'}
];

const pads2 = [
  {btn: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'},
  {btn: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'},
  {btn: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'},
  {btn: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'},
  {btn: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'},
  {btn: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'},
  {btn: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'},
  {btn: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'},
  {btn: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'}
];

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pad: 1
    };
  }
  render(){
    return <div className='App App__row App_border' id='drum-machine'>

      <div className='App_w-50'>
        <div className='App__row'>
          <Pad text='Q' id='audio_1'/><Pad text='W' id='audio_2'/><Pad text='E' id='audio_3'/>
        </div>
        <div className='App__row'>
          <Pad text='A' id='audio_4'/><Pad text='S' id='audio_5'/><Pad text='D' id='audio_6'/>
        </div>
        <div className='App__row'>
          <Pad text='Z' id='audio_7'/><Pad text='X' id='audio_8'/><Pad text='C' id='audio_9'/>
        </div>        
      </div>

      <div className='App_w-50'>
        <div className='App__row'>
          <Toggler/>
        </div>
        <div className='App__row'>
          <Display/>
        </div>                
      </div>
    </div>;
  }
}  

export default App;