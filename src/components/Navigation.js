import React, { useState } from 'react';
import styled from 'styled-components';

import { BACKGROUND_LIGHT } from './Colors';
import { COVID_ICON, EVENT_DETAILS_ICON } from './Icons';
import NavigationItem from './NavigationItem';

const Container = styled.div`
    background-color: ${BACKGROUND_LIGHT};
    border-radius: 5px;
    box-shadow: 0px 0px 2px black;
    opacity: 0.8;

    position: fixed;
    top: 5px;
    right: 10px;
`;

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <NavigationItem
        expanded={expanded}
        href="#details"
        icon={EVENT_DETAILS_ICON}
        title="Event Details"
      />
      <NavigationItem
        expanded={expanded}
        href="#covid"
        icon={COVID_ICON}
        title="COVID-19"
      />
    </Container>
  );
}
