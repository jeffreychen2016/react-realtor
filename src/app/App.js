import React, { Component } from 'react';
import './App.css';
import Listings from '../components/Listings/Listing';
import Building from '../components/Building/Building';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Listings />
        <Building />
      </div>
    );
  }
}

export default App;
