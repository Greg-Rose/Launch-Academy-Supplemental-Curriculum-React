import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = props => {
  let tweets = props.data.map(tweetData => {
    return (
      <Tweet
        key={tweetData.id_str}
        tweet={tweetData}
      />
    )
  });

  return (
    <div className="row">
      {tweets}
    </div>
  )
};

export default TwitterFeed;
