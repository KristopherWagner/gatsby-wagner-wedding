import React from 'react';
import PropTypes from 'prop-types';

import './FlipCard.css';

export default function FlipCard(props) {
  const { image } = props;

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {image}
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
}

FlipCard.propTypes = {
  image: PropTypes.node.isRequired,
};
