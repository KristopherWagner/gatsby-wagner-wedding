import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const ParallaxDiv = styled.div`
    aspect-ratio: ${(props) => props.aspectRatio};
    background-attachment: scroll;
    background-image: ${(props) => `url(${props.url})`};
    background-position-y: 0;
    background-repeat: no-repeat;
    background-size: contain;

    @media (min-width: 1080px) {
      background-attachment: fixed;
      background-position: center center;
      background-size: cover;
      min-height: 100vh;
    }
`;

export default function Parallax({ aspectRatio, url }) {
  return <ParallaxDiv aspectRatio={aspectRatio} url={url} />;
}

Parallax.propTypes = {
  aspectRatio: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};
