import React from 'react';

import FlipCard from './FlipCard';

export default function About() {
  return (
    <div id="about">
      <FlipCard image={<img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" width="300px" height="300px" />} />
    </div>
  );
}
