import React, { Component } from 'react';
import axios from 'axios';
import MediaQuery from 'react-responsive';
import Tabs from './Tabs';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Parallax } from "react-parallax";


class TopicPage extends Component {
  constructor(props){
    super(props)
  }
  state = {
    topic: null
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/topics/${id}`)
      .then((response) => {
        this.setState({ topic: response.data})
      })
      .catch(function (error) {
        return error;
      })
  }

  render() {
    if (!this.state.topic) {
      return <p>Loading...</p>
    }
    let {description, good, bad, name, photo_url, twitter_url} = this.state.topic;

    return (
      <div>
        <MediaQuery maxWidth={575}>
          <div className="imgbox">
            <div className="topic-img-div">
              <span className="mobile-heading">{name}</span>
              <img src={photo_url} className="topic-img"/>
            </div>
          </div>
          <div>
            <Tabs>
              <div label="FACT">
                <br />
                <h3>THE &lsquo;WHAT&rsquo;</h3>
                <p>{description}</p>
                <h4>IN FAVOUR</h4>
                <p>{good}</p>
                <h4>NOT IN FAVOUR...</h4>
                <p>{bad}</p>
              </div>
              <div label="OPINIONS">
                <div className="card">
                  <blockquote className="blockquote mb-0">
                    <div className="centerContent">
                      <div className="selfCenter standardWidth">
                        <TwitterTimelineEmbed  sourceType="URL" url={twitter_url}/>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </Tabs>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={576}>
          <Parallax bgImage={photo_url} strength={500}>
            <div className="parallax-img" style={{ height: 500 }}>
              <h2 className="heading">{name}</h2>
            </div>
          </Parallax>
          <div className="topic-container">
            <div className="row">
              <div className="col-8">
                <h3>FACT</h3>
                <br />
                <h3>THE &lsquo;WHAT&rsquo;</h3>
                <p>{description}</p>
                <h4>IN FAVOUR...</h4>
                <p>{good}</p>
                <h4>NOT IN FAVOUR...</h4>
                <p>{bad}</p>
              </div>
              <div className="col-4">
                <h3>OPINIONS</h3>
                <div className="card">
                  <blockquote className="blockquote mb-0">
                    <div className="centerContent">
                      <div className="selfCenter standardWidth">
                        <TwitterTimelineEmbed  sourceType="URL" url={twitter_url} options={{height: 450}}/>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default TopicPage;
