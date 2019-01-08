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
          <Parallax bgImage="https://i.ibb.co/KxnwLgs/canadian-flag.jpg" strength={500} bgWidth={2200}>
            <div style={{ height: 500 }} className="bg"></div>
          </Parallax>
        </MediaQuery>
        <MediaQuery maxWidth={575}>
          <div className="imgbox">
            <div className="bg"><img src="https://i.ibb.co/LkqbLJR/canadian-flag.jpg"/></div>
          </div>
        </MediaQuery>
          <div className="about">
            <h3>About</h3>
            <p>
              We help educate voters on the key topics in the upcoming election. A better informed voter means better informed voting and decision making, with the ambitious aim to improve our nation.
              <br/>
              THE ‘WHAT’
              <b/>
              Bacon ipsum dolor amet brisket cupim picanha shank andouille pork loin. Picanha ham chicken, landjaeger kielbasa drumstick pig chuck rump prosciutto meatloaf beef ribs pork loin venison. Pork brisket short loin strip steak, swine pork chop spare ribs bresaola pancetta filet mignon andouille ground round kielbasa hamburger picanha. Beef ribs tenderloin bresaola, sausage buffalo pig cupim biltong meatloaf fatback turkey cow turducken swine.
              <br/>
              THE ‘GOOD’
              People don't expect government to solve all their problems. They stood on the Edmund Pettus Bridge, as the blows of billy clubs rained down. There was even a time when the Christian Coalition determined that its number one legislative priority was tax cuts for the rich. But we can only achieve it together.
              <br/>
              THE ‘BAD’
              Louis, and thousands more like her, who has the grades, has the drive, has the will, but doesn't have the money to go to college. But we cannot walk away this time. These challenges are not all of government's making.
            </p>
          </div>
        </div>
    )
  };
}

export default App;
