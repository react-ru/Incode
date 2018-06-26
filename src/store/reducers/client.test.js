import reducer from './client';
import * as actionTypes from '../actions/actionTypes';

describe('client reducer', () => {
  const clientList = [
    {
      "general": {
        "firstName": "Liana",
        "lastName": "Crooks",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
      },
      "job": {
        "company": "Ledner, Johnson and Predovic",
        "title": "Investor Functionality Coordinator"
      },
      "contact": {
        "email": "Gerry_Hackett77@gmail.com",
        "phone": "(895) 984-0132"
      },
      "address": {
        "street": "1520 Zemlak Cove",
        "city": "New Devon",
        "zipCode": "42586-7898",
        "country": "Guinea-Bissau"
      }
    }]

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
          clientList: [],
          clientDetail: null
        });
    });

    it('should fetch the clients', () => {
      expect(reducer({
        clientList: [],
        clientDetail: null
      }, { 
        type: actionTypes.FETCH_CLIENT_LIST,
        items: clientList
       })).toEqual({
        clientList: clientList,
        clientDetail: null
      });
    })
});