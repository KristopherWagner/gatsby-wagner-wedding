/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import styled from 'styled-components';

import './index.css';
import {
  Button, ButtonGroup, HorizontalRule, Section,
} from '../components';
import { PRIMARY_CONTAINER_TEXT } from '../components/Colors';

const ROLES = [
  'BRIDE',
  'BRIDAL ATTENDANTS',
  'MOTHER OF THE BRIDE',
  'FATHER OF THE BRIDE',
  'GROOM',
  'GROOMSMAN',
  'PARENT OF THE GROOM',
];

const THURSDAY_EVENTS = [{
  name: 'Rehearsal',
  location: 'The Wedding Pavilion at Disney\'s Grand Floridian Resort and Spa',
  time: '5:00pm - 6:00pm',
  note: 'Arrive between 4:30pm and 4:45pm',
}, {
  name: 'Rehearsal Dinner',
  location: 'Fantasmic!',
  time: '7:00pm - 8:45pm',
  note: 'Meet at the entrance to DHS between 6pm and 6:30pm',
}];

const FRIDAY_EVENTS = [{
  name: 'Morning Run',
  location: 'Disney\'s Grand Floridian Resort and Spa',
  time: '8:30am - 10:00am',
  note: 'Optional: Running around the Seven Seas Lagoon',
  roles: ['BRIDE', 'GROOM'],
}, {
  name: 'Hair & Makeup',
  location: 'Disney\'s Grand Floridian Resort and Spa',
  time: '11:00am - 4:00pm',
  note: 'Text us for room number',
  roles: ['BRIDE', 'GROOM', 'BRIDAL ATTENDANTS', 'MOTHER OF THE BRIDE'],
}, {
  name: 'Getting ready',
  location: 'Disney\'s Saratoga Springs and Spa',
  time: '1:30pm - 3:30pm',
  roles: ['GROOM', 'GROOMSMAN'],
  note: 'Text the groom for room number',
}, {
  name: 'First look',
  location: 'Disney\'s Grand Floridian Resort and Spa',
  time: '4:30pm',
  roles: ['BRIDE', 'GROOM'],
}, {
  name: 'Wedding Party & Family Photos',
  location: 'Disney\'s Grand Floridian Resort and Spa',
  time: '5:00pm - 7pm',
  roles: ROLES,
  note: 'Check back for more details',
}, {
  name: 'Ceremony',
  location: 'The Wedding Pavilion at Disney\'s Grand Floridian Resort and Spa',
  time: '7:30pm - 8:00pm',
  roles: ROLES,
}, {
  name: 'Post-Ceremony Photos',
  location: 'The Wedding Pavilion at Disney\'s Grand Floridian Resort and Spa',
  time: '8:00pm - 8:15pm',
  roles: ['BRIDE', 'GROOM'],
}, {
  name: 'Reception',
  location: 'Italy Isola, EPCOT',
  time: '8:30pm - 2:00am',
  roles: ROLES,
}];

function Details({
  // eslint-disable-next-line react/prop-types
  name, location, time, note,
}) {
  return (
    <>
      <h5 className="montserrat">{name}</h5>
      <p className="body1">
        {location}
        <br />
        {time}
        <br />
        {note}
      </p>
    </>
  );
}

const Root = styled.div`
  min-height: calc(100vh - 48px);
`;

export default function TimelinePage() {
  const [role, setRole] = useState('');

  return (
    <Section>
      <Root>
        <h3 className="montserrat">Timeline</h3>
        <p className="subtitle2">Select your role</p>
        <HorizontalRule color={PRIMARY_CONTAINER_TEXT} />
        <ButtonGroup>
          {ROLES.map((item) => (
            <Button
              onClick={() => setRole(item)}
              selected={role === item}
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>
        <HorizontalRule color={PRIMARY_CONTAINER_TEXT} />
        {role !== '' && (
          <>
            <h4 className="montserrat">3/9/23</h4>
            {THURSDAY_EVENTS.map((evt) => <Details {...evt} />)}
            <h4 className="montserrat">3/10/23</h4>
            {FRIDAY_EVENTS.map((evt) => evt.roles.includes(role) && <Details {...evt} />)}
          </>
        )}
      </Root>
    </Section>
  );
}
