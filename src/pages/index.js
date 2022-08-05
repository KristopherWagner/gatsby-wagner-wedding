import React from 'react';

import '@fontsource/montserrat';
import '@fontsource/roboto';
import '../font-awesome/css/fontawesome.min.css';
import '../font-awesome/css/brands.min.css';
import '../font-awesome/css/duotone.min.css';
import '../font-awesome/css/solid.min.css';
import './index.css';

import {
  About,
  Covid,
  EventDetails,
  Helmet,
  Navigation,
  Parallax,
  Travel,
} from '../components';

import Christmas from '../images/christmas.webp';
import ClimateSimulator from '../images/climate_simulator.webp';
import SpaceMountain from '../images/space_mountain.webp';
import StarlightLounge from '../images/starlight_lounge.webp';

export default function IndexPage() {
  return (
    <>
      <Helmet />
      <Navigation />
      <Parallax url={StarlightLounge} />
      <section>
        <EventDetails />
      </section>
      <Parallax url={ClimateSimulator} />
      <section>
        <Travel />
      </section>
      <Parallax url={Christmas} />
      <section>
        <Covid />
      </section>
      <Parallax url={SpaceMountain} />
      <section>
        <About />
      </section>
    </>
  );
}
