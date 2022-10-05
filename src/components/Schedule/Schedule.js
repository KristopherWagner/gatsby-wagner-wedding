import React from 'react';

import { PRIMARY_CONTAINER_TEXT } from '../Colors';
import HorizontalRule from '../HorizontalRule';
import ScheduleItem from './ScheduleItem';

export default function Schedule() {
  return (
    <>
      <h3>Schedule of Events</h3>
      <p className="subtitle2">
        Check back later for more details
      </p>
      <HorizontalRule color={PRIMARY_CONTAINER_TEXT} />
      <h4 className="Montserray">Thursday</h4>
      <ScheduleItem
        name="Rehearsal Dinner"
        when="TBD"
        where="TBD"
        who="All guests (optional)"
      />
      <HorizontalRule color={PRIMARY_CONTAINER_TEXT} />
      <h4 className="Montserray">Friday</h4>
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
      <HorizontalRule color={PRIMARY_CONTAINER_TEXT} />
      <h4 className="Montserray">Sunday</h4>
      <ScheduleItem
        name="Park day"
        when="11:00am"
        where="EPCOT"
        who="All guests (optional)"
      />
    </>
  );
}
