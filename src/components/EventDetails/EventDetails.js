import React from 'react';
import styled from 'styled-components';

import { BACKGROUND_LIGHT, BACKGROUND_LIGHT_TEXT, PRIMARY } from '../Colors';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Icon = styled.i`
  color: ${PRIMARY};
`;

const Root = styled.div`
  background-color: ${BACKGROUND_LIGHT};
  color: ${BACKGROUND_LIGHT_TEXT};
  padding: 24px;
  text-align: center;
`;

export default function Event() {
  return (
    <Root id="details">
      <h3><Icon className="fa-duotone fa-calendar-heart" /></h3>
      <h3 className="montserrat">Our Wedding Day</h3>
      <p className="subtitle2">10th March, 2023</p>
      <Container>
        <div>
          <h4><Icon className="fa-duotone fa-rings-wedding" /></h4>
          <h4 className="montserrat">Ceremony</h4>
          <p className="body1">7:30pm</p>
          <p className="body1">The Wedding Pavilion at Disney&apos;s Grand Floridian Resort and Spa</p>
        </div>
        <div>
          <h4><Icon className="fa-duotone fa-champagne-glasses" /></h4>
          <h4 className="montserrat">Reception</h4>
          <p className="body1">8:30pm</p>
          <p className="body1">Italy Isola at Disney&apos;s EPCOT</p>
        </div>
      </Container>
    </Root>
  );
}
