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
  Travel,
} from '../components';

import Bridge from '../images/bridge.webp';
import ClimateSimulator from '../images/climate_simulator.webp';
import StarlightLounge from '../images/starlight_lounge.webp';

export default function IndexPage() {
  return (
    <>
      <Helmet />
      <Navigation />
      <Parallax url={StarlightLounge} />
      <EventDetails />
      <Parallax url={ClimateSimulator} />
      <Travel />
      <Parallax url={Bridge} />
      <Covid />
    </>
  );
}
