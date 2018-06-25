import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render () {
    return (
      <div >
        <input className='search_input'/>
        <div className='search_bottom_line'></div>
      </div>
    );
  }
}

export default SearchBar;