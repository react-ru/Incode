import * as actionTypes from '../actions/actionTypes';
import { filterClients } from '../../misc/clientsFilter';

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
  let newClients = action.clientsData.filter(item => filterClients(item, action.value));
  return ({
    ...state,
    ...{clientList: newClients} 
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