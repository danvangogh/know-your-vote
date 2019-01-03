import React, {Component} from 'react';

class DeleteTopic extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <form>
        <h4 className="admin delete-topic">Delete a Topic</h4>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Select from the following</label>
          <select className="form-control" id="exampleFormControlSelect1">
            { this.props.topics.map((topic) => {
              return (
                <option>{topic.name}</option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default DeleteTopic;
