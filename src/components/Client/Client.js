import React, { Component } from 'react';
import './Client.css';

class Client extends Component {
  render () {
    return (
      <div className='client' onClick={this.props.selected}>
        <img className='client_avatar' src={this.props.avatar} alt=''/>
        <div>
          <div>{this.props.firstName} {this.props.lastName}</div>
          <div className='client_job'>{this.props.company} -- {this.props.title}</div>
        </div>
      </div>
    );
  }
}

export default Client;