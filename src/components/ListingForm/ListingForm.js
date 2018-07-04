import React from 'react';

import './ListingForm.css';

class ListingForm extends React.Component {

  // when user fill in the form,
  // the state gets updated
  // then on submit, send the entire object to database
  state = {
    newListing: {
      address: '',
      city: '',
      squareFootage: 0,
    },
  }

  formSubmit = (e) => {
    const {onSubmit} = this.props;
    e.preventDefault();
    console.error('form submitted',e);
    onSubmit(this.state.newListing);
  };

  formFieldStringState = (name, e) => {
    const tempListing = {...this.state.newListing};
    tempListing[name] = e.target.value;
    this.setState({newListing: tempListing});
  };

  formFieldNumberState = (name, e) => {
    const tempListing = {...this.state.newListing};
    tempListing[name] = e.target.value * 1;
    this.setState({newListing: tempListing});
  };

  addressChange = (e) => {
    // make copy of the original state
    // const tempListing = {...this.state.newListing};
    // tempListing.address = e.target.value;
    // this.setState({newListing: tempListing});
    this.formFieldStringState('address',e);
  };

  cityChange = (e) => {
    this.formFieldStringState('city',e);
  };

  squareFootageChange = (e) => {
    this.formFieldNumberState('squareFootage',e);
  };

  render () {
    const {newListing} = this.state;
    return (
      <div className="ListingForm col-xs-8 col-xs-offset-2">
        <h2 className="text-center">Submit new property:</h2>
        <form onSubmit={this.formSubmit}>
          <div className="row">
            <fieldset className="col-xs-3">
              <label htmlFor="address">Address:</label>
              <br/>
              <input
                className="col-xs-12"
                type="text"
                id="address"
                placeholder="1234 Min Street"
                value={newListing.address}
                onChange={this.addressChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="city">City:</label>
              <br/>
              <input
                className="col-xs-12"
                type="text"
                id="city"
                placeholder="Nashville"
                value={newListing.city}
                onChange={this.cityChange}
              />
            </fieldset>
          </div>
          <div className="row">
            <fieldset className="col-xs-3">
              <label htmlFor="squareFootage">Square Footage:</label>
              <br/>
              <input
                className="col-xs-12"
                type="number"
                id="squareFootage"
                placeholder="123"
                value={newListing.squareFootage}
                onChange={this.squareFootageChange}
              />
            </fieldset>
          </div>
          <button className="col-xs-6 btn-danger col-xs-offset-3">Save House</button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
