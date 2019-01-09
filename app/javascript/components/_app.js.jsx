import React from 'react';
import axios from 'axios';
import MediaQuery from 'react-responsive';
import { Parallax } from "react-parallax";

class App extends React.Component {
  state = {
    open: false,
    topics: [],
    currentTopic: null
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    axios.get('/topics')
      .then((response) => {
        this.setState({
          topics: response.data
        })
      })
      .catch(function (error) {
        return error;
      });
  }

  topicSet = () => {
    this.setState({ currentTopic: topic.id})
  }

  render() {
    return(
      <div className="App">
        <MediaQuery minWidth={576}>
          <Parallax bgImage="https://i.ibb.co/KxnwLgs/canadian-flag.jpg" strength={500}>
            <div style={{ height: 500 }} className="bg"></div>
          </Parallax>
        </MediaQuery>
        <MediaQuery maxWidth={575}>
          <div className="imgbox">
            <div className="bg"><img src="https://i.ibb.co/LkqbLJR/canadian-flag.jpg"/></div>
          </div>
        </MediaQuery>
          <div className="about">
            <h2>About</h2>
            <br/>
            <p>
              Politics are confusing, but voting doesn't have to be.
            </p>
            <hr className="half-line" />
            <p>
              Here at KnowYourVote, we believe in facts over opinion. By providing a factual, un-biased look at the current issues in Canada, KnowYourVote aims to inform. The better informed a nation is with its potential leaders and their platforms, the better the chances are for accurate representation of the people's desires for the nation. This site is still in development, so citations and further depth of information is yet to come.
            </p>
          </div>
        </div>
    )
  };
}

export default App;
