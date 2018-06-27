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
  }

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
    return (
      <div className="App">
        <div className="col-sm-6">
          <Listings listings={this.state.listings}/>
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
