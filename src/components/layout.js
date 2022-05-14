/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import './layout.css';

export default function Layout({ children }) {
  return (
    <>
      <Header siteTitle="Wagner/Swanson Wedding" />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 'var(--size-content)',
          padding: 'var(--size-gutter)',
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: 'var(--space-5)',
            fontSize: 'var(--font-sm)',
          }}
        >
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          &middot; Built with
          {' '}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
