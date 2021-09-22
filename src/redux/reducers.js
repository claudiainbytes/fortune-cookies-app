import { combineReducers } from 'redux';
// Redux:
const ADD = 'ADD';
 
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};
 
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const mapStateToProps = (state) => {
  return {messages: state}
};
 
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};
 
const rootReducer = combineReducers({
  messageReducer
});

export { rootReducer, mapStateToProps, mapDispatchToProps };

