import React from 'react';
import styled from 'styled-components';

import { PRIMARY_CONTAINER_TEXT } from '../Colors';
import HorizontalRule from '../HorizontalRule';
import ScheduleItem from './ScheduleItem';

const Heading = styled.h4`
  font-family: "Montserrat", serif;
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
      <h3>Schedule of Events</h3>
      <p className="subtitle2">
        Check back later for more details
      </p>
      <HorizontalRule color={PRIMARY_CONTAINER_TEXT} />
      <Grid>
        <Heading>Thursday</Heading>
        <ScheduleItem
          name="Rehearsal"
          where="Disney's Wedding Pavilion"
          who="The wedding party"
        />
        <ScheduleItem
          name="Rehearsal Dinner"
          when="After the Rehearsal"
        />
      </Grid>
      <HorizontalRule color={PRIMARY_CONTAINER_TEXT} />
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
      <HorizontalRule color={PRIMARY_CONTAINER_TEXT} />
      <Grid>
        <Heading>Sunday</Heading>
        <ScheduleItem
          name="Park day"
          when="11:00am"
          where="EPCOT"
        />
      </Grid>
    </>
  );
}
