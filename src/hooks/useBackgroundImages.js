import { useStaticQuery, graphql } from 'gatsby';

export default function useBackgroundImages() {
  const response = useStaticQuery(graphql`
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
    `);

  return {
    'Climate Simulator': response.climateSimulator.childImageSharp.fluid.srcWebp,
    'Starlight Lounge': response.starlightLounge.childImageSharp.fluid.srcWebp,
  };
}
