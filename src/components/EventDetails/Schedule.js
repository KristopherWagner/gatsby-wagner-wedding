import React from 'react';
import styled from 'styled-components';

import { BRIDESMAID } from '../Colors';
import ScheduleItem from './ScheduleItem';

const Root = styled.div`
  background-color: ${BRIDESMAID};
  padding: 24px 0px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default function Schedule() {
  return (
    <Root>
      <h1>Thursday</h1>
      <Grid>
        <ScheduleItem
          name="Rehearsal"
          when="TBD"
          where="Disney's Wedding Pavilion"
          who="The wedding party"
        />
        <ScheduleItem
          name="Rehearsal Dinner"
          when="TBD"
          where="TBD"
          who="All guests"
        />
      </Grid>
      <h1>Friday</h1>
      <h2>Ceremony</h2>
      <h2>Reception</h2>
      <h1>Sunday</h1>
      <h2>EPCOT Park Day</h2>
    </Root>
  );
}
