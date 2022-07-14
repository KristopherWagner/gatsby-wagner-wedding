import React from 'react';

import '../../static/font-awesome/css/all.css';
import './index.css';

import SL from '../../static/images/starlight_lounge.jpg';
import CL from '../../static/images/climate_simulator.jpg';

import {
  Covid,
  EventDetails,
  Helmet,
  Parallax,
  Navigation,
} from '../components';

import { useBackgroundImages } from '../hooks';

export default function IndexPage() {
  const imageURLs = useBackgroundImages();

  return imageURLs != null ? (
    <>
      <Helmet />
      <Parallax url={SL} />
      <EventDetails />
      <Parallax url={CL} />
      <Covid />
      <Navigation />
    </>
  ) : null;
}
