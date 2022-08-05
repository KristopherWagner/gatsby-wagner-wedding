/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { SECONDARY_CONTAINER, SECONDARY_CONTAINER_TEXT } from '../Colors';
import FlipCard from './FlipCard';
import HorizontalRule from '../HorizontalRule';

const SHARED_PROPS = {
  loading: 'lazy',
  height: 300,
  widht: 300,
};

const Casper = <StaticImage alt="Casper" src="../../images/Casper.webp" {...SHARED_PROPS} />;
const Ella = <StaticImage alt="Ella" src="../../images/Ella.webp" {...SHARED_PROPS} />;
const Jesse = <StaticImage alt="Jesse" src="../../images/Jesse.webp" {...SHARED_PROPS} />;
const Jordan = <StaticImage alt="Jordan" src="../../images/Jordan.webp" {...SHARED_PROPS} />;
const Kelly = <StaticImage alt="Kelly" src="../../images/Kelly.webp" {...SHARED_PROPS} />;
const Nick = <StaticImage alt="Nick" src="../../images/Nick.webp" {...SHARED_PROPS} />;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 616px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 924px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
 
  @media (min-width: 1232px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 1540px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const Root = styled.div`
  background-color: ${SECONDARY_CONTAINER};
  color: ${SECONDARY_CONTAINER_TEXT};
  padding: 24px 0px;
  text-align: center;
`;

export default function About() {
  return (
    <Root id="about">
      <h3>The Wedding Party</h3>
      <p className="subtitle2">Meet the attendants for our wedding and learn their favorite Disney memory</p>
      <HorizontalRule color={SECONDARY_CONTAINER_TEXT} />
      <CardContainer>
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
        <FlipCard
          image={Nick}
          memory="Waking up every morning at the Animal Kingdom Lodge and seeing the animals walk outside my room."
          name="Nicholas Stuter"
        />
      </CardContainer>
    </Root>
  );
}
