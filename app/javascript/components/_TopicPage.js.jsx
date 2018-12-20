import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';

class TopicPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <p>literally something {this.props.match.params.topic}: {this.props.topics[this.props.match.params.topic]}</p>
    )
  }
}

export default TopicPage;
