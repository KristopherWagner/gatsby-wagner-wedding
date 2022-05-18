import React from 'react';

import '../../static/font-awesome/css/all.css';
import './index.css';

import {
  Covid,
  EventDetails,
  Helmet,
  Parallax,
} from '../components';

export default function IndexPage() {
  return (
    <>
      <Helmet />
      <Parallax image="Starlight Lounge" />
      <EventDetails />
      <Parallax image="Climate Simulator" />
      <Covid />
    </>
  );
}
