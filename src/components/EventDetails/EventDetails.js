import React from 'react';
import styled from 'styled-components';

import { BACKGROUND_LIGHT } from '../Colors';
import Event from './Event';
import Schedule from './Schedule';

const Root = styled.div`
  background-color: ${BACKGROUND_LIGHT};
  padding: 24px;
  text-align: center;
`;

export default function EventDetails() {
  return (
    <Root id="details">
      <Event />
      <Schedule />
    </Root>
  );
}
