import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import TopicsPage from './_TopicsPage.js'

class DeleteTopic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      topicToDelete: {
        id: 1,
        name: '',
      }
    }
  }

  handleChange = e => {
    const selectedIndex = e.target.options.selectedIndex;
    const topicId = e.target.options[selectedIndex].getAttribute('id');
    this.setState({
      topicToDelete: {
        name: e.target.value,
        id: topicId
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    axios.delete(`/admin/topics/${this.state.topicToDelete.id}`, {
    });
    this.setState({
      redirect: true
    })
  }

  render() {

    if (this.state.redirect) return <Route path='/' exact component={TopicsPage} />;

    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <h4 className="admin delete-topic">Delete a Topic</h4>
          <div className="form-group">
            <label>Select from the following</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              value={this.state.topicToDelete.name}
              onChange={this.handleChange}>
              { this.props.topics.map((topic) => {
                            return (
                              <option
                                key={topic.id}
                                id={topic.id}>{topic.name}
                              </option>
                            );
                          })
                        }
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default DeleteTopic;
