import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Clients extends Component {
  render () {
    return <div>Clints</div>;
  }
}

const mapStateToProps = state => {
  return {
    clients: state.client.clientList,
    client: state.client.clientItem
  }
};

const mapDispatchToProps = dispatch => {
  return {
    showClientList:(value) => dispatch(actions.showClientList(value)),
    showClientItem:(item) => dispatch(actions.showClientItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);