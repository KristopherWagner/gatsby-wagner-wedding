import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { STROMBOLI } from '../Colors';

const StyledLink = styled.a`
    color: black;
    text-decoration: none;
    text-decoration-line: underline;

    &:hover {
        color: ${STROMBOLI};
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
