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
    dispatch({
        type: actionTypes.SHOW_CLIENT_LIST,
        clientsData: clientsData,
        value: value
      }
    );
  };
};

export const showClientDetail = (item) => {
  return dispatch => {
      dispatch({
        type: actionTypes.SHOW_CLIENT_DETAIL,
        item: item
      });
  };
};