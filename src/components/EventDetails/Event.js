import React from 'react';
import styled from 'styled-components';

import Card from '../Card';

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export default function Event() {
  return (
    <Card icon="fa-duotone fa-calendar-heart">
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
  );
}
