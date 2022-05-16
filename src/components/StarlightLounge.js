import React from 'react';
import { withPrefix } from 'gatsby';
import styled from 'styled-components';

const StarLightDiv = styled.div`
    aspect-ratio: 2309/1536;
    background-attachment: scroll;
    background-image: url(${withPrefix('/images/starlight_lounge.jpg')});
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

export default function StarlightLounge() {
  return <StarLightDiv />;
}
