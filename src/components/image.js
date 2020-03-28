import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Image = props => {
  const { dentist } = useStaticQuery(graphql`
    query {
      dentist: file(
        relativePath: { eq: "dentista-posadas-misiones-infantil.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={dentist.childImageSharp.fluid} />;
};

export default Image;
