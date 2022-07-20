import React from 'react';

import '../font-awesome/css/all.css';
import './index.css';

import {
  Covid,
  EventDetails,
  Helmet,
  Navigation,
  Parallax,
} from '../components';

import { useBackgroundImages } from '../hooks';

export default function IndexPage() {
  const imageURLs = useBackgroundImages();

  return imageURLs != null ? (
    <>
      <Helmet />
      <Navigation />
      <Parallax url={imageURLs['Starlight Lounge']} />
      <EventDetails />
      <Parallax url={imageURLs['Climate Simulator']} />
      <Covid />
    </>
  ) : null;
}
