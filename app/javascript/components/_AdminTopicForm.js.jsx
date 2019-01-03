import React, { Component } from 'react';
import axios from 'axios';

class TopicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      good: '',
      bad: '',
      photo_url: '',
      twitter_url: ''
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("got to function")

    axios.post('/admin/topics', {
      name: this.state.name,
      description: this.state.description,
      good: this.state.good,
      bad: this.state.bad,
      photo_url: this.state.photo_url,
      twitter_url: this.state.twitter_url
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    const { name, description, good, bad, photo_url, twitter_url } = this.state;
    return(
      <form onSubmit={this.onSubmit}>
        <h4 className="admin add-topic">Add a Topic</h4>
        <div className="form-group">
          <label for="topic-name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label for="topic-description">Description</label>
          <textarea
            className="form-control"
            rows="3"
            name="description"
            value={description}
            onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label for="topic-description">Good</label>
          <textarea
            className="form-control"
            rows="3"
            name="good"
            value={good}
            onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label for="topic-description">Bad</label>
          <textarea
            className="form-control"
            rows="3"
            name="bad"
            value={bad}
            onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label for="topic-name">Add Topic Image URL</label>
          <input
            type="text"
            className="form-control"
            name="photo_url"
            value={photo_url}
            onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label for="topic-name">Twitter collection URL</label>
          <input
            type="text"
            className="form-control"
            name="twitter_url"
            value={twitter_url}
            onChange={this.onChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default TopicForm;
