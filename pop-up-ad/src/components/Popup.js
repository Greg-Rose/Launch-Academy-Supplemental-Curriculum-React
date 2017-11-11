import React from 'react';

const Popup = props => {
  let handleExit = () => {
    confirm(`Are you sure you don't want to see ${props.artist}'s one time only benefit concert?`);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return(
    <div className="row">
      <div className="medium-8 medium-offset-2 columns">
        <div className="callout success text-center">
          <i className="fa fa-times pull-right" aria-hidden="true" onClick={handleExit}></i>
          <h5>You have won tickets to see {props.artist}!!!</h5>
          <p>Please enter your email address so we can send you the tickets</p>
          <form className="row collapse postfix-round">
            <div className="small-9 columns">
              <input type="text" placeholder="Your email here"></input>
            </div>
            <div className="small-3 columns">
              <input type="submit" value="CLAIM YOUR PRIZE" className="button postfix" onClick={handleSubmit}></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
