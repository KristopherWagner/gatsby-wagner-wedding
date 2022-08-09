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

export function Head() {
  return (
    <>
      <title>Swanson/Wagner Wedding</title>
      <meta name="description" content="All of the details for our Disney Fairy Tale Wedding" />
      <meta name="robots" content="nofollow, noimageindex, noarchive" />
      <link rel="canonical" href="https://swansonwagner.wedding" />

      {/* Facebook */}
      <meta property="og:url" content="https://swansonwagner.wedding" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Swanson/Wagner Wedding" />
      <meta property="og:description" content="All of the details for our Disney Fairy Tale Wedding" />
      <meta property="og:image" content="https://swansonwagner.wedding/static/starlight_lounge-cf67d74b7be4b4baf494389267fa8e60.webp" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="swansonwagner.wedding" />
      <meta property="twitter:url" content="https://swansonwagner.wedding" />
      <meta name="twitter:title" content="Swanson/Wagner Wedding" />
      <meta name="twitter:description" content="All of the details for our Disney Fairy Tale Wedding" />
      <meta name="twitter:image" content="https://swansonwagner.wedding/static/starlight_lounge-cf67d74b7be4b4baf494389267fa8e60.webp" />
    </>
  );
}
