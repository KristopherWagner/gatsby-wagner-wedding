/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { BACKGROUND_LIGHT } from '../Colors';
import FlipCard from './FlipCard';

const SHARED_PROPS = {
  loading: 'lazy',
  height: '300px',
  widht: '300px',
};

const Casper = <StaticImage alt="Casper" src="../../images/Casper.webp" {...SHARED_PROPS} />;
const Ella = <StaticImage alt="Ella" src="../../images/Ella.webp" {...SHARED_PROPS} />;
const Jesse = <StaticImage alt="Jesse" src="../../images/Jesse.webp" {...SHARED_PROPS} />;
const Jordan = <StaticImage alt="Jordan" src="../../images/Jordan.webp" {...SHARED_PROPS} />;
const Kelly = <StaticImage alt="Kelly" src="../../images/Kelly.webp" {...SHARED_PROPS} />;

const Root = styled.div`
  background-color: ${BACKGROUND_LIGHT};
  padding: 24px 0px;
  text-align: center;
`;

const Title = styled.h2`
  margin-top: 0px;
`;

export default function About() {
  return (
    <Root id="about">
      <Title>The Wedding Party</Title>
      <p>Meet the attendants for our wedding and learn their favorite Disney memory</p>
      <FlipCard
        image={Casper}
        memory="Spending the night in Cinderella Castle and being a part of the parade during the year of a million dreams"
        name="Casper Wagner"
      />
      <FlipCard
        image={Ella}
        memory="Seeing Cinderella Castle from the ferry boat for the first time."
        name="Ella Melzer"
      />
      <FlipCard
        image={Jesse}
        memory="Riding the Kilimanjaro Safari with my wife."
        name="Jesse Sharkawy"
      />
      <FlipCard
        image={Jordan}
        memory="Spending an entire day meeting characters and collecting signatures for my grad cap."
        name="Jordan Barrett"
      />
      <FlipCard
        image={Kelly}
        memory="Feeling like I'm flying on the Avatar Flight of Passage ride in Pandora."
        name="Kelly Swanson-Obando"
      />
    </Root>
  );
}
