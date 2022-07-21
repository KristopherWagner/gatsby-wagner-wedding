import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import { BACKGROUND_DARK } from './Colors';

const Root = styled.div`
    background-color: ${BACKGROUND_DARK};
    padding: 24px;
    text-align: center;
`;

export default function Travel() {
  return (
    <Root id="travel">
      <Card icon="fa-duotone fa-ticket-airline">
        <h2>Travel and Accommodations</h2>
        <p>TODO!</p>
      </Card>
    </Root>
  );
}
