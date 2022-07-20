import React from 'react';

import '../font-awesome/css/fontawesome.min.css';
import '../font-awesome/css/brands.min.css';
import '../font-awesome/css/duotone.min.css';
import '../font-awesome/css/solid.min.css';
import './index.css';

import {
  Covid,
  EventDetails,
  Helmet,
  Navigation,
  Parallax,
} from '../components';

import StarlightLounge from '../images/starlight_lounge.jpg';
import ClimateSimulator from '../images/climate_simulator.jpg';

export default function IndexPage() {
  return (
    <>
      <Helmet />
      <Navigation />
      <Parallax url={StarlightLounge} />
      <EventDetails />
      <Parallax url={ClimateSimulator} />
      <Covid />
    </>
  );
}
