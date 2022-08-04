import React from 'react';
import styled from 'styled-components';

import { SECONDARY_CONTAINER_TEXT } from '../Colors';
import HorizontalRule from '../HorizontalRule';
import ScheduleItem from './ScheduleItem';

// eslint-disable-next-line react/prop-types
function Cursive({ className, children }) {
  return <h4 className={`cursive ${className}`}>{children}</h4>;
}

const Heading = styled(Cursive)`
  margin: auto 0;
`;

const Grid = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1080px) {
    grid-template-columns: 1fr 2fr 2fr;
  }
`;

export default function Schedule() {
  return (
    <>
      <Grid>
        <Heading>Thursday</Heading>
        <ScheduleItem
          name="Rehearsal"
          where="Disney's Wedding Pavilion"
          who="The wedding party"
        />
        <ScheduleItem name="Rehearsal Dinner" />
      </Grid>
      <HorizontalRule color={SECONDARY_CONTAINER_TEXT} />
      <Grid>
        <Heading>Friday</Heading>
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
      <HorizontalRule color={SECONDARY_CONTAINER_TEXT} />
      <Grid>
        <Heading>Sunday</Heading>
        <ScheduleItem
          dress="Comfortable"
          name="Park day"
          when="11:00am"
          where="EPCOT"
        />
      </Grid>
    </>
  );
}
