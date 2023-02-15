import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PRIMARY_CONTAINER_TEXT, SECONDARY_CONTAINER } from '../Colors';

const StyledButton = styled.button`
  border-radius: 20px;
  border: 1px solid;
  background-color: ${(props) => (props.selected ? SECONDARY_CONTAINER : 'transparent')};
  color: ${PRIMARY_CONTAINER_TEXT};
  height: 50px;

  &:hover {
    background-color: ${SECONDARY_CONTAINER};
  }
`;

export default function Button(props) {
  const { children } = props;
  return <StyledButton className="button" type="button">{children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
