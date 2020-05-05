import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Servicios = () => {
  const { mariaElenaOficina } = useStaticQuery(graphql`
    query {
      mariaElenaOficina: file(
        relativePath: {
          eq: "odontologo-posadas-maria-elena-pinelli-oficina.jpeg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <div className="px-2 sm:px-4 py-8 md:py-12 border-b">
      <div className="flex flex-col flex-col-reverse md:flex-row ">
        <div className="mt-4 md:mt-0 w-full md:w-1/2">
          <Img
            className="rounded-lg overflow-auto"
            fluid={mariaElenaOficina.childImageSharp.fluid}
          />
        </div>

        <div className="py-4 pl-0 sm:pl-8 pr-0 w-full md:w-1/2">
          <p className="text-xl text-gray-800 mb-8">
            Explica la gente que podrias hacer para ellos. Breve y facil.
          </p>
          <div className="px-2 sm:px-8 py-4">
            <h3 className="text-lg font-bold text-blue-900">Servicio 1</h3>
            <p className=" text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              venenatis felis a elit volutpat, nec pulvinar ipsum ultricies.
            </p>
          </div>
          <div className="px-2 sm:px-8 py-4">
            <h3 className="text-lg font-bold text-blue-900">Servicio 2</h3>
            <p className=" text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              venenatis felis a elit volutpat, nec pulvinar ipsum ultricies.
            </p>
          </div>
          <div className="px-2 sm:px-8 py-4">
            <h3 className="text-lg font-bold text-blue-900">Servicio 3</h3>
            <p className=" text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              venenatis felis a elit volutpat, nec pulvinar ipsum ultricies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
