import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// TODO fix the hover color
import { PRIMARY_CONTAINER_TEXT, SECONDARY } from './Colors';

const StyledLink = styled.a`
    color: ${PRIMARY_CONTAINER_TEXT};
    text-decoration: none;
    text-decoration-line: underline;

    &:hover {
        color: ${SECONDARY};
    }
`;

export default function Link(props) {
  const { href, text } = props;
  return (
    <StyledLink
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {text}
    </StyledLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
