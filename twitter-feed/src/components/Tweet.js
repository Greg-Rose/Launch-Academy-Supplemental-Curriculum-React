import React from 'react';

const Tweet = props => {
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let date = new Date(parseInt(props.tweet.timestamp_ms));
  let tweetMonth = months[date.getMonth()];
  let tweetDay = date.getDate();
  let retweets = props.tweet.retweet_count;
  let favorites = props.tweet.favorite_count;
  let text = props.tweet.text;

  let favoritedClass;
  if (props.tweet.favorited === true) {
    favoritedClass = "favorited";
  }

  let retweetedClass;
  if (props.tweet.retweeted === true) {
    retweetedClass = "retweeted";
  }

  if ('media' in props.tweet.entities) {
    text = text.replace(props.tweet.entities.media[0].display_url, "");
  }

  let imageURL = () => {
    if ('media' in props.tweet.entities) {
      return(
        <img src={props.tweet.entities.media[0].media_url} alt="image" height="550" width="550"></img>
      );
    }
    return("")
  };

  let handleClick = (message) => {
    alert(message);
  }

  return (
    <div className="small-12 columns">
      <div className="row">
        <div className="small-8 small-offset-2 columns tweet">
          <div className="row">
            <div className="small-2 columns text-center">
              <img src={props.tweet.user.profile_image_url} alt="avatar" height="70" width="70"></img>
            </div>
            <div className="small-10 columns">
              <div className="row">
                <div className="small-12 columns user-info">
                  <p>
                    <span>{props.tweet.user.name}</span> <span className="username">@{props.tweet.user.screen_name}</span> · <span className="date">{tweetMonth} {tweetDay}</span>
                  </p>
                </div>
                <div className="small-12 columns">
                  <p>{text}</p>
                </div>
                <div className="small-12 columns">
                  {imageURL()}
                </div>
                <div className="small-12 columns buttons">
                  <i className="fa fa-reply" aria-hidden="true" onClick={() => handleClick("reply")}></i>
                  <i className={"fa fa-retweet " + retweetedClass} aria-hidden="true" onClick={() => handleClick("retweet")}>  {retweets}</i>
                  <i className={"fa fa-heart " + favoritedClass} aria-hidden="true" onClick={() => handleClick("like")}>  {favorites}</i>
                  <i className="fa fa-ellipsis-h" aria-hidden="true" onClick={() => handleClick("more")}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Tweet;
