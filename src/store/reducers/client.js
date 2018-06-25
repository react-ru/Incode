import * as actionTypes from '../actions/actionTypes';

const initialState = {
  clientList: {},
  clientItem: null
};

const fetchClientList = (state, action) => {
  return ({
    ...state,
    ...{ clientList: [], clientItem: null} 
  });
};

const showClientList = (state, action) => {
  return ({
    ...state,
    ...{ clientList: [], clientItem: null} 
  });
};

const showClientItem = (state, action) => {
  return ({
    ...state,
    ...{ clientList: [], clientItem: null} 
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CLIENT_LIST: return fetchClientList(state, action);
    case actionTypes.SHOW_CLIENT_LIST: return showClientList(state, action);
    case actionTypes.SHOW_CLIENT_ITEM: return showClientItem(state, action);
    default: return state;
  }
};

export default reducer;