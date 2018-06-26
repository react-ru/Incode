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



const filterClients = (item, value) => {
  let obj = Object.values(item);

  for (let i = 0; i < obj.length; i++) {
    let newObj = Object.values(obj[i]);

    for(let k = 0; k < newObj.length; k++) {
      if (isLettersInWord(newObj[k], value)) {
        console.log(newObj[k]);
        return true;
      }
    }
  }
  return false;
}

const isLettersInWord = (str, value) => {
  let newStr = str.toUpperCase();
  let newValue = value.toUpperCase();
  let n = newStr.toUpperCase().indexOf(newValue.toUpperCase());
  return n === 0 ? true : false
}