import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

export default function Helmet() {
  return (
    <ReactHelmet>
      <title>Wagner/Swanson Wedding</title>
      <meta name="description" content="Wedding website for Kristopher Wagner and Shannon Swanson" />
    </ReactHelmet>
  );
}
