import React from 'react';
import { Img } from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "farm-placeholder.jpg" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return <Img fixed={data.file.childImageSharp.fixed} />;
};
