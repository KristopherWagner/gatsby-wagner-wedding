import Header from "../components/header"
import Layout from '../components/layout'
import React from 'react';

export default function IndexPage() {
  return (
    <>
      <Header siteTitle="Wagner/Swanson Wedding" />
      <Layout>
        <h1>Welcome to our wedding site!</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </>
  )
}
