import React from 'react';
import styled from 'styled-components';

import { BRIDESMAID, SECONDARY } from '../Colors';
import HorizontalRule from '../HorizontalRule';
import ScheduleItem from './ScheduleItem';

const Root = styled.div`
  background-color: ${BRIDESMAID};
  padding: 24px 0px;
  text-align: center;
`;

const Heading = styled.h1`
  @media (min-width: 1080px) {
    float: left;
  }
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
      <Heading>Thursday</Heading>
      <Grid>
        <ScheduleItem
          name="Rehearsal"
          where="Disney's Wedding Pavilion"
          who="The wedding party"
        />
        <ScheduleItem name="Rehearsal Dinner" />
      </Grid>
      <HorizontalRule color={SECONDARY} />
      <Heading>Friday</Heading>
      <Grid>
        <ScheduleItem
          dress="Cocktail attire"
          name="Ceremony"
          when="7:30pm - 8:00pm"
          where="Disney's Wedding Pavilion"
        />
        <ScheduleItem
          dress="Cocktail attire"
          name="Reception"
          when="8:30pm - 1:30am"
          where="Italy Isola, EPCOT"
        />
      </Grid>
      <HorizontalRule color={SECONDARY} />
      <Heading>Sunday</Heading>
      <Grid>
        <ScheduleItem
          dress="Comfortable"
          name="Park day"
          when="11:00am"
          where="EPCOT"
        />
      </Grid>
    </Root>
  );
}
