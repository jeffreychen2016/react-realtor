import React from 'react';
import PropTypes from 'prop-types';
import {listingShape} from '../../propz/listingProp';
import ListingItem from '../../components/ListingItem/ListingItem';
import './Listings.css';

class Listings extends React.Component {

  // check in-coming props to see if the data type is what we expected
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
  };

  render () {
    // const {listings} = this.props.listings;
    const {listings} = this.props;
    const listingsItemComponents = listings.map((listingItem) => {
      return (
        // move this to seperate component
        // <li key={listingItem.id}>{listingItem.price}</li>
        <ListingItem listing={listingItem} key={listingItem.id}/>
      );
    });

    return (
      <div className="Listings">
        <h2>Listings</h2>
        <ul>
          {listingsItemComponents}
        </ul>
      </div>
    );
  }
}

export default Listings;
