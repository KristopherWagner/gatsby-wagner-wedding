import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import { BACKGROUND_LIGHT } from './Colors';
import { EVENT_DETAILS_ICON } from './Icons';

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Root = styled.div`
  background-color: ${BACKGROUND_LIGHT};
  padding: 24px;
  text-align: center;
`;

export default function EventDetails() {
  return (
    <Root id="details">
      <Card icon={EVENT_DETAILS_ICON}>
        <h2>Our Wedding Day</h2>
        <p>10th March, 2023</p>
        <Container>
          <Card icon="fa-duotone fa-rings-wedding">
            <h3>Ceremony</h3>
            <p>7:30pm</p>
            <p>The Wedding Pavilion at Disney&apos;s Grand Floridian Resort and Spa</p>
          </Card>
          <Card icon="fa-duotone fa-champagne-glasses">
            <h3>Reception</h3>
            <p>8:30pm</p>
            <p>Italy Isola at Disney&apos;s EPCOT</p>
          </Card>
        </Container>
      </Card>
    </Root>
  );
}
