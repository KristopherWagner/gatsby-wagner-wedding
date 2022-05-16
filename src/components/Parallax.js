import React from 'react';
import { withPrefix } from 'gatsby';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StarLightDiv = styled.div`
    aspect-ratio: 2309/1536;
    background-attachment: scroll;
    background-image: ${(props) => `url(${withPrefix(props.url)})`};
    background-position-y: 0;
    background-repeat: no-repeat;
    background-size: contain;

    @media (min-width: 1366px) {
      background-attachment: fixed;
      background-position: center center;
      background-size: cover;
      min-height: 100vh;
    }
`;

export default function Parallax({ url }) {
  return <StarLightDiv url={url} />;
}

Parallax.propTypes = {
  url: propTypes.string.isRequired,
};
