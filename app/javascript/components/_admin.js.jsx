import React, { Component } from 'react';

class Admin extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    topic: null,
    tweets: null,
  }

  render() {
    return (
      <form>
        <h4 class="add-topic">Add a Topic</h4>
        <div class="form-group">
          <label for="topic-name">Name</label>
          <input type="text" class="form-control"></input>
        </div>
        <div class="form-group">
          <label for="topic-description">Description</label>
          <textarea class="form-control" rows="3"></textarea>
        </div>
        <div class="form-group">
          <label for="topic-description">Good</label>
          <textarea class="form-control" rows="3"></textarea>
        </div>
        <div class="form-group">
          <label for="topic-description">Bad</label>
          <textarea class="form-control" rows="3"></textarea>
        </div>
        <div class="form-group">
          <label for="topic-name">Twitter collection URL</label>
          <input type="text" class="form-control"></input>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    )
  }

}

export default Admin;
