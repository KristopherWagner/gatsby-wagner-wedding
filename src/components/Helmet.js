import React from 'react';
import PropTypes from 'prop-types';
import { Helmet as ReactHelmet } from 'react-helmet';

export default function Helmet(props) {
  const { title } = props;
  return (
    <ReactHelmet>
      {/* HTML */}
      <title>{title}</title>
      <meta name="description" content="All of the details for our Disney Fairy Tale Wedding" />
      <meta name="robots" content="nofollow , noimageinde, noarchive" />
      <link rel="canonical" href="https://swansonwagner.wedding" />

      {/* Facebook */}
      <meta property="og:url" content="https://swansonwagner.wedding" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Swanson/Wagner Wedding" />
      <meta property="og:description" content="All of the details for our Disney Fairy Tale Wedding" />
      <meta property="og:image" content="https://swansonwagner.wedding/static/starlight_lounge-cf67d74b7be4b4baf494389267fa8e60.webp" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="swansonwagner.wedding" />
      <meta property="twitter:url" content="https://swansonwagner.wedding" />
      <meta name="twitter:title" content="Swanson/Wagner Wedding" />
      <meta name="twitter:description" content="All of the details for our Disney Fairy Tale Wedding" />
      <meta name="twitter:image" content="https://swansonwagner.wedding/static/starlight_lounge-cf67d74b7be4b4baf494389267fa8e60.webp" />
    </ReactHelmet>
  );
}

Helmet.propTypes = {
  title: PropTypes.string,
};

Helmet.defaultProps = {
  title: 'Swanson/Wagner Wedding',
};
