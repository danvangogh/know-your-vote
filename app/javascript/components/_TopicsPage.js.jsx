import React from 'react';
import { Link } from 'react-router-dom';


function TopicsPage({ topics }) {
  console.log('what is the arrayy?@@?@?@', topics);
  return (
    <div>
      <h2>Current Topics</h2>
      <div className="topics">
        <div className="card-deck section group">
          { topics.map((topic) => {
            return (
              <div className="col-4 span_1_of_3 hometopics" key={topic.id}>
                <Link to={`/topics/${topic.name}/${topic.id}`} className="title" params={{ id: topic.id }}>
                  <span className="topic">{topic.name}</span>
                  <img src={topic.photo_url} alt={topic.name} className="img-responsive" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopicsPage;
