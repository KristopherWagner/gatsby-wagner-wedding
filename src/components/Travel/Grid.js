import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
`;

export default function Grid(props) {
  const { children } = props;
  return <StyledGrid>{children}</StyledGrid>;
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};
