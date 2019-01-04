import React, { Component } from 'react';
import axios from 'axios';

class QuoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      party_id: 1,
      text: ''
    }
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  partySelect = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    const partyId = e.target.options[selectedIndex].getAttribute('id');
    this.setState({
      party_id: partyId
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    axios.post('/admin/quotes', {
      text: this.state.text,
      party_id: this.state.party_id
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <h4 className="admin add-topic">Add a Quote</h4>
          <div className="form-group">
            <label>Quote</label>
            <textarea
              className="form-control"
              rows="3"
              onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Select Parties from the following</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={this.partySelect}>
              { this.props.parties.map((party) => {
                return (
                  <option
                    key={party.id}
                    id={party.id}>{party.name}</option>
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
