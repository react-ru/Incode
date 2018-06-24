import * as actionTypes from './actionTypes';

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