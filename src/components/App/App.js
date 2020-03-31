import React from 'react';
import './App.css';
import Display from '../../containers/DisplayContainer';
import Toggler from '../Toggler/Toggler';
import PadWrapper from '../../containers/PadWrapperContainer';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';

class App extends React.Component{
  constructor(props){
    super(props);    
  }
  render(){
    return <Provider store={this.props.store}>
      <div className='App App__row App_border App__row_end' id='drum-machine'>

        <div className='App_w-50'>
          <div className='App__row'>          
            <PadWrapper/>
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
      </div>
    </Provider>;
  }
}

App.propTypes = {
  store:PropTypes.object.isRequired
};

export default App;