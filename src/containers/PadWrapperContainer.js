import {connect} from 'react-redux';
import PadWrapper from '../components/PadWrapper/PadWrapper';

const mapStateToProps = (state) => {
  return {
    pads: state
  };
};

const setActiveBtn = (btn) => {
  return {
    type:'ACTIVE',
    btn:btn
  };
};
  
const mapDispatchToProps = (dispatch) => {
  return {
    setActive: (btn)=>dispatch(setActiveBtn(btn))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PadWrapper);