import React, { Component } from 'react';
import './App.css';
import Listings from '../components/Listings/Listing';
import Building from '../components/Building/Building';
import ListingForm from '../components/ListingForm/ListingForm';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="col-sm-6">
          <Listings />
        </div>
        <div className="col-sm-6">
          <Building />
        </div>
        <div className="col-sm-12">
          <ListingForm />
        </div>
      </div>
    );
  }
}

export default App;
