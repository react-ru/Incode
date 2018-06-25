import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Client from '../../components/Client/Client';
import './Clients.css';

class Clients extends Component {
  componentDidMount () {
    this.props.fetchClientList();
  }

  render () {
    let clients = this.props.clients.map((item, index) => (
      <Client
        key={index}
        avatar={item.general.avatar}
        firstName={item.general.firstName}
        lastName={item.general.lastName} 
        company={item.job.company} 
        title={item.job.title} />
    ));

    return (
     <div className='clients_page'>
     <div className='client_list'>
      {clients}
     </div>
      
     </div>
    );
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