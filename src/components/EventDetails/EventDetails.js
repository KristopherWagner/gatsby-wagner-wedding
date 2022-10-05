import React from 'react';
import styled from 'styled-components';

import { PRIMARY } from '../Colors';

const Icon = styled.i`
  color: ${PRIMARY};
`;

export default function Event() {
  return (
    <>
      <h3 className="montserrat">
        <Icon className="fa-duotone fa-calendar-heart" />
        <br />
        Our Wedding Day
      </h3>
      <p className="body1">10th March, 2023</p>
      <h4 className="montserrat">
        <Icon className="fa-duotone fa-rings-wedding" />
        <br />
        Ceremony
      </h4>
      <p className="body1">
        7:30pm
        <br />
        The Wedding Pavilion at Disney&apos;s Grand Floridian Resort and Spa
      </p>
      <h4 className="montserrat">
        <Icon className="fa-duotone fa-champagne-glasses" />
        <br />
        Reception
      </h4>
      <p className="body1">
        8:30pm
        <br />
        Italy Isola at Disney&apos;s EPCOT
      </p>
    </>
  );
}
