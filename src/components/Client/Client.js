import React, { Component } from 'react';
import './Client.css';

class Client extends Component {
  render () {
    return (
      <div className='client'>
        <img src={this.props.avatar} alt=''/>
        <div>
          <div className='client_name'>{this.props.firstName} {this.props.lastName}</div>
          <div className='client_job'>{this.props.company} -- {this.props.title}</div>
        </div>
      </div>
    );
  }
}


export default Client;