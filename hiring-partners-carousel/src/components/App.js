import React, { Component } from 'react';
import PartnerLogo from './PartnerLogo';

const App = props => {
  let logos = props.data;

  return (
    <div>
      <h1>Hiring Partners</h1>
      <hr></hr>
      <p>We work with the very best. We are proud of our partners, who work with us to deliver the best training.</p>
      <PartnerLogo logos={logos} />
    </div>
  );
};

export default App;
