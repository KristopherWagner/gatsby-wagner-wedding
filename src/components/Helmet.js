import React from 'react';
import PropTypes from 'prop-types';
import { Helmet as ReactHelmet } from 'react-helmet';

export default function Helmet(props) {
  const { title } = props;
  return (
    <ReactHelmet>
      <title>{title}</title>
      <meta name="description" content="Wedding website for Kristopher Wagner and Shannon Swanson" />
    </ReactHelmet>
  );
}

Helmet.propTypes = {
  title: PropTypes.string,
};

Helmet.defaultProps = {
  title: 'Wagner/Swanson Wedding',
};
