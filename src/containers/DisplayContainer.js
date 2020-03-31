import {connect} from 'react-redux';
import Display from '../components/Display/Display';

const mapStateToProps = (state) => {
  return {
    pads: state
  };
};

export default connect(mapStateToProps, null)(Display);