import React, { Component } from 'react';
import axios from 'axios';

class QuoteForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <form>
          <h4 className="admin add-topic">Add a Quote</h4>
          <div className="form-group">
            <label>Quote</label>
            <textarea className="form-control" rows="3"/>
          </div>
          <div className="form-group">
            <label>Select Parties from the following</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1">
              { this.props.parties.map((party, index) => {
                return (
                  <option key={index}>{party.name}</option>
                );
              })}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}


export default QuoteForm;
