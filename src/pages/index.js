import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export default function IndexPage() {
  return (
    <>
      <div style={{ height: '100vh', width: '100vw' }}>
        <StaticImage
          alt="Shannon and Kristopher at the Starlight Lounge on the Halcyon"
          src="../images/starlight_lounge.jpg"
        />
      </div>
      <Layout>
        <h1>Welcome to our wedding site!</h1>
        <p>I&lsquo;m making this by following the Gatsby Tutorial.</p>
      </Layout>
    </>
  );
}
