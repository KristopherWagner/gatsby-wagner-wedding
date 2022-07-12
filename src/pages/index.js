import React from 'react';

import '../../static/font-awesome/css/all.css';
import './index.css';

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
      <Parallax url={imageURLs['Starlight Lounge']} />
      <EventDetails />
      <Parallax url={imageURLs['Climate Simulator']} />
      <Covid />
      <Navigation />
    </>
  ) : null;
}
