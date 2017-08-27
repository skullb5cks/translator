import { connect } from 'react-redux';
import { submitTranslate } from '../actions';
import Editor from '../components/Editor';

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(submitTranslate())
    }
  }
}

const UserInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(User);

export default UserInfo;