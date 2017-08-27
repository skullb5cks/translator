import { connect } from 'react-redux';
import { addUser } from '../actions';
import User from '../components/User';

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(addUser())
    }
  }
}

const UserInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(User);

export default UserInfo;