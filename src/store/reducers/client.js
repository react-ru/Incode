import * as actionTypes from '../actions/actionTypes';

const initialState = {
  clientList: [],
  clientDetail: null
};

const fetchClientList = (state, action) => {
  return ({
    ...state,
    ...{clientList: action.items, clientDetail: null} 
  });
};

const showClientList = (state, action) => {
  return ({
    ...state,
    ...{clientList: [], clientDetail: null} 
  });
};

const showClientDetail = (state, action) => {
  return ({
    ...state,
    ...{clientDetail: action.item} 
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CLIENT_LIST: return fetchClientList(state, action);
    case actionTypes.SHOW_CLIENT_LIST: return showClientList(state, action);
    case actionTypes.SHOW_CLIENT_DETAIL: return showClientDetail(state, action);
    default: return state;
  }
};

export default reducer;