import React from 'react';
import styled from 'styled-components';

import { SECONDARY_CONTAINER, SECONDARY_CONTAINER_TEXT } from '../Colors';
import HorizontalRule from '../HorizontalRule';
import Schedule from './Schedule';

const Root = styled.div`
  background-color: ${SECONDARY_CONTAINER};
  color: ${SECONDARY_CONTAINER_TEXT};
  padding: 24px;
  text-align: center;
`;

export default function Event() {
  return (
    <Root id="details">
      <h3 className="cursive">Our Wedding Day</h3>
      <p className="subtitle2">10th March, 2023</p>
      <HorizontalRule color={SECONDARY_CONTAINER_TEXT} />
      <Schedule />
    </Root>
  );
}
