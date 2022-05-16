import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Icon = styled.i`
  color: #4caf50;
  font-size: 36px;
`;

const Item = styled.div`
  display: inline-block;
  width: 50vw;
`;

const Root = styled.div`
  background-color: #e5e5e5;
  padding: 24px;
  text-align: center;
`;

export default function EventDetails() {
  return (
    <Root>
      <Icon className="fa-duotone fa-calendar-heart" />
      <h2>Our Wedding Day</h2>
      <p>10th March, 2023</p>
      <Container>
        <Item>
          <Icon className="fa-duotone fa-rings-wedding" />
          <h3>Ceremony</h3>
          <p>7:30pm</p>
          <p>The Wedding Pavilion at Disney&apos;s Grand Floridian Resort and Spa</p>
        </Item>
        <Item>
          <Icon className="fa-duotone fa-champagne-glasses" />
          <h3>Reception</h3>
          <p>8:30pm</p>
          <p>Italy Isola at Disney&apos;s EPCOT</p>
        </Item>
      </Container>
    </Root>
  );
}
