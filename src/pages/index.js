import React from 'react';

import '../../static/font-awesome/css/all.css';
import './index.css';

import { EventDetails, Parallax } from '../components';

export default function IndexPage() {
  return (
    <>
      <Parallax url="/images/starlight_lounge.jpg" />
      <EventDetails />
      <Parallax url="/images/climate_simulator.jpg" />
    </>
  );
}
