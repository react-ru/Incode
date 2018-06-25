import React, { Component } from 'react';
import './ClientDetail.css';

class ClientDetail extends Component {
  render () {
    return (
      <div className='client_detail_page'>
        <img className='client_detail_avatar' src={this.props.avatar} alt=''/>
        <div className='client_detail_header'>
          <div className='client_detail_fullname'>{this.props.firstName} {this.props.lastName}</div>
          <div className='client_detail_job'>
            <div>Company: {this.props.company}</div>
            <div>Title: {this.props.title}</div>
          </div>
        </div>
        <div className='clear_fix'></div>
        <div>
          <div className='client_detail_constact'>Contact</div>
          <div >email: {this.props.email}</div>
          <div >phone: {this.props.phone}</div>
        </div>
        <div>
          <div className='client_detail_address'>Address</div>
          <div>street: {this.props.street} </div>
          <div>city: {this.props.city}</div>
          <div>zipCode: {this.props.zipCode}</div>
          <div>country: {this.props.country}</div>
        </div>
      </div>
    );
  }
}

export default ClientDetail;