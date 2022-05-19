import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: calc(1536 / 2309 * 100vw);
`;

const Image = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    height: auto;

    aspect-ratio: 2309/1536;
    background-attachment: scroll;
    background-image: ${(props) => `url(${props.url})`};
    background-position-y: 0;
    background-repeat: no-repeat;
    background-size: contain;
    min-width: 100vw;

    @media (min-width: 1080px) {
      background-attachment: fixed;
      background-position: center center;
      background-size: cover;
      min-height: 100vh;
    }
`;

export default function Parallax({ url }) {
  return (
    <Wrapper>
      <Image url={url} />
    </Wrapper>
  );
}

Parallax.propTypes = {
  url: propTypes.string.isRequired,
};
