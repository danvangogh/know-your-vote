import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    topics: [],
    parties:[]
  }

  componentDidMount() {
    axios.all([
      axios.get('/topics'),
      axios.get('/parties')
    ])
    .then(axios.spread((topicsRes, partiesRes) => {
      this.setState({
        topics: topicsRes.data,
        parties: partiesRes.data
      })
    }))
    .catch(function (error) {
      return error;
    })
  }

  axios.post('/topics', {
      name: 'Fred',
      description: 'Flintstone',
      good: '',
      bad: '',
      photo_url: '',
      twitter_url: ''
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


  render() {
    return (
      <div>
        <form>
          <h4 className="admin add-topic">Add a Topic</h4>
          <div className="form-group">
            <label for="topic-name">Name</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label for="topic-description">Description</label>
            <textarea className="form-control" rows="3"/>
          </div>
          <div className="form-group">
            <label for="topic-description">Good</label>
            <textarea className="form-control" rows="3"/>
          </div>
          <div className="form-group">
            <label for="topic-description">Bad</label>
            <textarea className="form-control" rows="3"/>
          </div>
          <div className="form-group">
            <label for="topic-name">Add Topic Image URL</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label for="topic-name">Twitter collection URL</label>
            <input type="text" className="form-control"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <form>
          <h4 className="admin add-topic">Add a Quote</h4>
          <div className="form-group">
            <label for="topic-description">Quote</label>
            <textarea className="form-control" rows="3"/>
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Select Parties from the following</label>
            <select className="form-control" id="exampleFormControlSelect1">
              { this.state.parties.map((party) => {
                return (
                  <option>{party.name}</option>
                );
              })}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <form>
          <h4 className="admin delete-topic">Delete a Topic</h4>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Select from the following</label>
            <select className="form-control" id="exampleFormControlSelect1">
              { this.state.topics.map((topic) => {
                return (
                  <option>{topic.name}</option>
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

export default Admin;
