import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Client from '../../components/Client/Client';

configure({adapter: new Adapter()});

describe('<Client />', () => {
  let wrapper;

  beforeEach(() => {
      wrapper = mount(
        <Client
        avatar='avatar'
        firstName='firstName'
        lastName='lastName' 
        company='company'
        title='title'
       />);
  });

  it('should render elements with props ', () => {
    expect(wrapper.props().avatar).toBe('avatar');
    expect(wrapper.props().firstName).toBe('firstName');
    expect(wrapper.props().lastName).toBe('lastName');
    expect(wrapper.props().company).toBe('company');
    expect(wrapper.props().title).toBe('title');
  });
})