import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SECONDARY } from './Colors';

const Button = styled.a`
    display: flex;
    padding: 5px;
    text-decoration: none;
`;

const Icon = styled.i`
    color: ${SECONDARY};
    font-size: 32px;
`;

const Text = styled.p`
    color: ${SECONDARY};
    display: inline;
    margin: auto 0 auto 5px;
`;

export default function NavigationItem(props) {
  const {
    expanded, href, icon, title,
  } = props;

  return (
    <Button href={href}>
      <Icon className={icon} />
      {expanded && <Text>{` ${title}`}</Text>}
    </Button>
  );
}

NavigationItem.propTypes = {
  expanded: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
