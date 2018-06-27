import React, { Component } from 'react';
import './App.css';
import Listings from '../components/Listings/Listing';
import Building from '../components/Building/Building';
import ListingForm from '../components/ListingForm/ListingForm';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Listings />
        <Building />
        <ListingForm />
      </div>
    );
  }
}

export default App;
