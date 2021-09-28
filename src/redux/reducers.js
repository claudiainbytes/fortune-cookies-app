import { apiGetQuotes } from '../lib/Api';

const initialState = { quotes: [] };

const GET_QUOTES = 'GET_QUOTES';

const getQuotes = (quotes) => ({ type: GET_QUOTES, payload: quotes });

const fetchGetQuotes = () => {
  return (dispatch) => {
      apiGetQuotes()
          .then(res => {
              let reslimited = res.map(a => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map(a => a.value);
              dispatch(getQuotes(reslimited.slice(0, 100)));
          })
          .catch(res => {
              console.log(res);
          })
  }
};


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

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTES:
      return {
        ...state,
        quotes: action.payload 
      };  
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
 
export { messageReducer, quotesReducer, mapStateToProps, mapDispatchToProps, fetchGetQuotes };

