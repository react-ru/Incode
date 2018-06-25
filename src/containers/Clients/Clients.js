import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Clients extends Component {
  componentDidMount () {
    this.props.fetchClientList();
  }

  render () {
    return <div>Clients</div>;
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clientList,
    client: state.clientItem
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchClientList:() => dispatch(actions.fetchClientList()),
    showClientList:(value) => dispatch(actions.showClientList(value)),
    showClientItem:(item) => dispatch(actions.showClientItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);