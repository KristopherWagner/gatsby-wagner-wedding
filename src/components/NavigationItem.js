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
    display: none;
    margin: auto 0 auto 5px;

    @media (min-width: 1080px) {
        display: ${(props) => (props.expanded ? 'inline' : 'none')};
    }
`;

export default function NavigationItem(props) {
  const {
    expanded, href, icon, title,
  } = props;

  return (
    <Button href={href}>
      <Icon className={icon} />
      <Text expanded={expanded}>{` ${title}`}</Text>
    </Button>
  );
}

NavigationItem.propTypes = {
  expanded: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
