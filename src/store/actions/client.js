import * as actionTypes from './actionTypes';

export const fetchClientList = () => {
  return dispatch => {
    dispatch(() => {
      return {
        type: actionTypes.FETCH_CLIENT_LIST
      }
    });
  };
};

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