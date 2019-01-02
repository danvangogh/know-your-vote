import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    topics: [],
    tweets: null,
  }

  componentDidMount() {
    axios.get('/topics')
      .then((response) => {
        console.log("data:", response.data);
        this.setState({
          topics: response.data
        }, () => {
          console.log(this.state)
        })
      })
      .catch(function (error) {
        return error;
      });
  }

  render() {
    return (
      <div>
        <form>
          <h4 className="add-topic">Add a Topic</h4>
          <div className="form-group">
            <label for="topic-name">Name</label>
            <input type="text" className="form-control"></input>
          </div>
          <div className="form-group">
            <label for="topic-description">Description</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label for="topic-description">Good</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label for="topic-description">Bad</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label for="topic-name">Twitter collection URL</label>
            <input type="text" className="form-control"></input>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <form>
          <h4 className="delete-topic">Delete a Topic</h4>
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


/* 

{ topics.map((topic) => {
  return (
    <div className="col-4 span_1_of_3 hometopics" key={topic.id}>
      <Link to={`/topics/${topic.name}/${topic.id}`} className="title" params={{ id: topic.id }}>
        <span className="topic">{topic.name}</span>
        <img src={topic.photo_url} alt={topic.name} className="img-responsive" />
      </Link>
    </div>
  );
})}
*/