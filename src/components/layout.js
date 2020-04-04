import React from 'react';
import Helmet from 'react-helmet';
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

      <div className="bg-dentist-teal">{children}</div>
    </>
  );
};

export default Layout;
