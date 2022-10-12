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
  Section,
  Schedule,
  Travel,
} from '../components';

import BridgeKissing from '../images/bridge_kissing.webp';
import PlazaWalking from '../images/plaza_walking.webp';
import StarlightLounge from '../images/starlight_lounge.webp';
import WheelFarAway from '../images/wheel_far_away.webp';
import WheelStanding from '../images/wheel_standing.webp';
import WheelWalking from '../images/wheel_walking.webp';

export default function IndexPage() {
  return (
    <>
      <Navigation />
      <Parallax aspectRatio="5000/3293" url={WheelFarAway} />
      <Section anchor="details" variant="light">
        <EventDetails />
      </Section>
      <Parallax aspectRatio="2309/1536" url={StarlightLounge} />
      <Section anchor="travel" variant="primary">
        <Travel />
      </Section>
      <Parallax aspectRatio="5000/3327" url={WheelStanding} />
      <Section anchor="covid" variant="light">
        <Covid />
      </Section>
      <Parallax aspectRatio="5000/3327" url={PlazaWalking} />
      <Section anchor="about" variant="secondary">
        <About />
      </Section>
      <Parallax aspectRatio="5000/3507" url={BridgeKissing} />
      <Section anchor="schedule" variant="primary">
        <Schedule />
      </Section>
      <Parallax aspectRatio="5000/3271" url={WheelWalking} />
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
