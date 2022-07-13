import { useStaticQuery, graphql } from 'gatsby';

export default function useBackgroundImages() {
  const response = useStaticQuery(graphql`
      query {
        climateSimulator: file(relativePath: { eq: "climate_simulator.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
        starlightLounge: file(
          relativePath: { eq: "starlight_lounge.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    `);

  return {
    'Climate Simulator': response.climateSimulator.childImageSharp.gatsbyImageData.images.sources[0].srcSet.split(' ')[0],
    'Starlight Lounge': response.starlightLounge.childImageSharp.gatsbyImageData.images.sources[0].srcSet.split(' ')[0],
  };
}
