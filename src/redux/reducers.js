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
 
export { quotesReducer, fetchGetQuotes };

