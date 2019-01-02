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
        <label>
          Topic:
          <input type='text' name='name' />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }

}

export default Admin;
