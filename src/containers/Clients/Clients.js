import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Client from '../../components/Client/Client';
import SearchBar from '../../components/SearchBar/SearchBar';
import ClientDetail from '../../components/ClientDetail/ClientDetail';
import './Clients.css';

export class Clients extends Component {
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
        title={item.job.title} 
        selected={() => this.props.showClientDetail(item)}/>
    ));

    let clientDetail = null;
    if (this.props.clientDetail !== null) {
      let item = this.props.clientDetail;
      clientDetail = 
        <ClientDetail 
          avatar={item.general.avatar}
          firstName={item.general.firstName}
          lastName={item.general.lastName} 
          company={item.job.company} 
          title={item.job.title} 
          email={item.contact.email}
          phone={item.contact.phone}
          street={item.address.street}
          city={item.address.city}
          zipCode={item.address.zipCode}
          country={item.address.country} />
    }

    return (
     <div className='clients_page'>
      <div className='client_bar'>
        <SearchBar search={(e) => this.props.showClientList(e.target.value)} />
        <div>
          {clients}
        </div>
      </div>
      {clientDetail}
     </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clientList,
    clientDetail: state.clientDetail
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchClientList:() => dispatch(actions.fetchClientList()),
    showClientList:(value) => dispatch(actions.showClientList(value)),
    showClientDetail:(item) => dispatch(actions.showClientDetail(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);