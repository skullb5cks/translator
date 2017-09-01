import { connect } from 'react-redux';
import { submitTranslate } from '../actions';
import Editor from '../components/Editor';

const mapStateToProps = (state, ownProps) => {
  return {
    editor: state.editor
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(submitTranslate())
    }
  }
}

const Translator = connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor);

export default Translator;