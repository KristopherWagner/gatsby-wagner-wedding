import React from 'react';

import Layout from '../components/layout';
import StarlightLounge from '../components/StarlightLounge';

export default function IndexPage() {
  return (
    <>
      <StarlightLounge />
      <Layout>
        <h1>Welcome to our wedding site!</h1>
        <p>I&lsquo;m making this by following the Gatsby Tutorial.</p>
      </Layout>
    </>
  );
}
