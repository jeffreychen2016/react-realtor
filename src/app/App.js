import React, { Component } from 'react';
import './App.css';
import connection from '../firebaseRequests/connection';
import Listings from '../components/Listings/Listing';
import Building from '../components/Building/Building';
import ListingForm from '../components/ListingForm/ListingForm';
import listingRequests from '../firebaseRequests/listings';

class App extends Component {
  state = {
    listings: [],
    selectedListingId: -1,
  }

  // This function has to be on the same file as the state.
  // Because this App.js is the only place that can affect both listing and building components
  // This App.js is parent of all components
  listingSelectEvent = (id) => {
    this.setState({
      selectedListingId: id,
    });
  };

  componentDidMount () {
    connection();
    listingRequests.getRequest()
      .then((listings) => {
        this.setState({listings});
      })
      .catch((err) => {
        console.error('Error with listing GET',err);
      });
  };

  render () {
    const {selectedListingId, listings} = this.state;
    const selectedListing = listings.find(listing => listing.id === selectedListingId) || {nope: 'nope'};
    return (
      <div className="App">
        <div className="col-sm-6">
          <Listings
            listings={this.state.listings}
            onListingSelection={this.listingSelectEvent}
          />
        </div>
        <div className="col-sm-6">
          <Building listing={selectedListing}/>
        </div>
        <div className="col-sm-12">
          <ListingForm />
        </div>
      </div>
    );
  }
}

export default App;
