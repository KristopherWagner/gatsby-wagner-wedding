import React from 'react';
import { withPrefix } from 'gatsby';
import Layout from '../components/layout';

export default function IndexPage() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${withPrefix('/images/starlight_lounge.jpg')})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',

          minHeight: '100vh',
        }}
      />
      <Layout>
        <h1>Welcome to our wedding site!</h1>
        <p>I&lsquo;m making this by following the Gatsby Tutorial.</p>
      </Layout>
    </>
  );
}
