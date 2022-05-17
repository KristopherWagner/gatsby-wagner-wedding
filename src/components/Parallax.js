import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const ParallaxDiv = styled.div`
    aspect-ratio: 2309/1536;
    background-attachment: scroll;
    background-image: ${(props) => `url(${props.url})`};
    background-position-y: 0;
    background-repeat: no-repeat;
    background-size: contain;

    @media (min-width: 1080px) {
      background-attachment: fixed;
      background-position: center center;
      background-size: cover;
      min-height: 100vh;
    }
`;

const getImageURLs = () => {
  const data = useStaticQuery(
    graphql`
      query {
        climateSimulator: file(relativePath: { eq: "climate_simulator.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        starlightLounge: file(
          relativePath: { eq: "starlight_lounge.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `,
  );

  return {
    'Climate Simulator': data.climateSimulator.childImageSharp.fluid.srcWebp,
    'Starlight Lounge': data.starlightLounge.childImageSharp.fluid.srcWebp,
  };
};

export default function Parallax({ image }) {
  const images = getImageURLs();
  return <ParallaxDiv url={images[image]} />;
}

Parallax.propTypes = {
  image: propTypes.oneOf(['Climate Simulator', 'Starlight Lounge']).isRequired,
};
