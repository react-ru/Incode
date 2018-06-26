import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Clients } from './Clients';
import SearchBar from '../../components/SearchBar/SearchBar';
import Client from '../../components/Client/Client';

configure({adapter: new Adapter()});

describe('<Clients />', () => {
  const initialState = {
    clientList: [
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
    }], clientDetail: {
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
    }}

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Clients fetchClientList={() => {}} 
      clients={initialState.clientList} 
      clientDetail={initialState.clientDetail} />);
  });

  it('should render <SearchBar /> element', () => {
    expect(wrapper.find(SearchBar)).toHaveLength(1); 
  });

  it('should render <Client /> element', () => {
    expect(wrapper.find(Client)).toHaveLength(1);
  });
});