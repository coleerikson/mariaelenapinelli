import React from 'react';
import Helmet from 'react-helmet';
import Footer from './footer';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="content" description={description}></meta>
      </Helmet>

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
