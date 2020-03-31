import React from 'react';
import './PadWrapper.css';
import Pad from '../../containers/PadContainer';
import PropTypes from 'prop-types';

class PadWrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      localPads: []
    };
    this.handlePads = this.handlePads.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handlePads(){
    const pads = [];
    for(let btn in this.props.pads){
      pads.push(<Pad text={btn} id={btn + '_id_pad'} key={btn + '_key_pad'}/>);    
    } 
    this.setState({
      localPads: pads
    });
  }

  handleKeyDown(){    
    const audios = document.getElementsByTagName('audio');
    
    for(let audio in audios){      
      if(Number(audio) >= 0 && Number(audio) < audios.length){
        const pad = this.props.pads[audios[audio].id];                        
        if(event.keyCode == pad.key){
          audios[audio].parentNode.style.backgroundColor = '#744FC6'; 
          this.props.setActive(audios[audio].id);                                       
          audios[audio].play();
          setTimeout(()=>{
            audios[audio].parentNode.style.backgroundColor = '#4FB0C6';    
          }, 150);           
        }
      }      
    }    
  }

  componentDidMount(){
    this.handlePads();
    document.addEventListener('keydown', this.handleKeyDown);       
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render(){
    return<div className='PadWrapper App__row'>
      {this.state.localPads} 
    </div>; 
  }
}

PadWrapper.propTypes = {
  pads:PropTypes.object.isRequired
};

export default PadWrapper;