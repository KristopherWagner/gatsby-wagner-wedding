import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
  align-self: center;
  background-color: transparent;
  display: inline-block;
  justify-self: center;
  margin-top: 16px;
  perspective: 1000px;

  height: 300px;
  width: 300px;
`;

const Container = styled.div`
  box-shadow: 0 3px 6px black;
  position: relative;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  height: 100%;
  width: 100%;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const Front = styled.div`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;

  height: 100%;
  width: 100%;
`;

const Back = styled(Front)`
  background-color: #B9E4C9;
  transform: rotateY(180deg);
`;

const Memory = styled.p`
  padding: 4px;
`;

export default function FlipCard(props) {
  const { image, memory, name } = props;

  return (
    <Root>
      <Container>
        <Front>
          {image}
        </Front>
        <Back>
          <h3>{name}</h3>
          <Memory>{memory}</Memory>
        </Back>
      </Container>
    </Root>
  );
}

FlipCard.propTypes = {
  image: PropTypes.node.isRequired,
  memory: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
