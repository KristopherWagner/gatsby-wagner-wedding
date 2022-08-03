import React from 'react';
import PropTypes from 'prop-types';

import './FlipCard.css';

export default function FlipCard(props) {
  const { image, memory, name } = props;

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {image}
        </div>
        <div className="flip-card-back">
          <h3>{name}</h3>
          <p className="memory">{memory}</p>
        </div>
      </div>
    </div>
  );
}

FlipCard.propTypes = {
  image: PropTypes.node.isRequired,
  memory: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
