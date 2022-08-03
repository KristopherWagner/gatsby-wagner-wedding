import React from 'react';
import PropTypes from 'prop-types';

import './FlipCard.css';

export default function FlipCard(props) {
  const { image, memory, name } = props;

  return (
    <div className="flip-card">
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <div className="flip-card-inner" tabIndex={0}>
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
