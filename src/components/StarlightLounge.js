import React from 'react';
import { withPrefix } from 'gatsby';
import styled from 'styled-components';

const StarLightDiv = styled.div`
    background-image: url(${withPrefix('/images/starlight_lounge.jpg')});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;

    @media only screen and (max-device-width: 1366px) {
        background-attachment: scroll;
    }
`;

export default function StarlightLounge() {
  return <StarLightDiv />;
}
