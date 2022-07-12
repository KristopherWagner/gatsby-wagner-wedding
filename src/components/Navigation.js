import React from 'react';
import styled from 'styled-components';

import { BACKGROUND_LIGHT, SECONDARY } from './Colors';

const Button = styled.a`
    display: block;
`;

const Container = styled.div`
    background-color: ${BACKGROUND_LIGHT};
    border-radius: 5px;
    box-shadow: 0px 0px 2px black;
    opacity: 0.8;

    position: fixed;
    top: 5px;
    right: 5px;
`;

const Icon = styled.i`
    color: ${SECONDARY};
    font-size: 32px;
    margin: 5px;
`;

export default function Navigation() {
  return (
    <Container>
      <Button href="#details" title="Jump to event details">
        <Icon className="fa-duotone fa-calendar-heart" />
      </Button>
      <Button href="#covid" title="Jump to COVID-19 guidance">
        <Icon className="fa-duotone fa-virus-covid" />
      </Button>
    </Container>
  );
}
