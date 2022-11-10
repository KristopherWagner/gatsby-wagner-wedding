import React from 'react';
import PropTypes from 'prop-types';

export default function Question({ children }) {
  return (
    <h5><em>{children}</em></h5>
  );
}

Question.propTypes = {
  children: PropTypes.node.isRequired,
};
