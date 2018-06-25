import * as actionTypes from './actionTypes';
import clientsData from '../../clients.json';

export const fetchClientList = () => {
  return dispatch => {
    dispatch(clients(clientsData));
  };
};

export const clients = (data) => {
  return {
    type: actionTypes.FETCH_CLIENT_LIST,
    items: data
  }
}

export const showClientList = (value) => {
  return dispatch => {
      dispatch((value) => {
        return {
          type: actionTypes.SHOW_CLIENT_LIST,
          value: value
        }
      });
  };
};

export const showClientItem = (item) => {
  return dispatch => {
      dispatch((value) => {
        return {
          type: actionTypes.SHOW_CLIENT_ITEM,
          item: item
        }
      });
  };
};