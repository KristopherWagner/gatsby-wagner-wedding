import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${
  (props) => (props.columns === 3 ? '33% 33% 33%' : '50% 50%')
};
`;

export default function Grid(props) {
  const { children, columns } = props;
  return <StyledGrid columns={columns}>{children}</StyledGrid>;
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.oneOf([2, 3]),
};

Grid.defaultProps = {
  columns: 3,
};
