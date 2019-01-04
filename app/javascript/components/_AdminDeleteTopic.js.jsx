import React, {Component} from 'react';
import axios from 'axios';

class DeleteTopic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topicToDelete: {
        id: 0,
        name: '',
      },
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
    console.log("got to function- s", e)
    console.log("this.state: ", this.state.topicToDelete.name)
    axios.delete(`/admin/topics/${this.state.topicToDelete.id}`, {
    });
  }

  render() {

    return(
      <form onSubmit={this.onSubmit}>
        <h4 className="admin delete-topic">Delete a Topic</h4>
        <div className="form-group">
          <label>Select from the following</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            value={this.state.topicToDelete}
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
    )
  }
}

export default DeleteTopic;
