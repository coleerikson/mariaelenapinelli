import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Hero = () => {
  const { mariaElena } = useStaticQuery(graphql`
    query {
      mariaElena: file(
        relativePath: { eq: "odontologo-posadas-maria-elena-pinelli.jpeg" }
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
    <div className="px-2 pb-4 sm:pb-12 border-b">
      <div className="flex flex-col md:flex-row lg:flex-row items-center">
        <div className="w-full md:w-2/3 pb-6">
          <h1 className="text-center sm:text-left text-3xl sm:text-4xl text-blue-900 mb-3">
            Dra. Maria Elena Pinelli
          </h1>
          <p className="text-xl text-gray-800 mb-6 text-center sm:text-left">
            Soy Maria Elena Pinelli Benitez, Odontologa especialista en
            Ortodoncia y Ortopedia de los Maxilares.
          </p>
          <div className="flex items-center flex-col flex-col-reverse justify-center sm:flex-row sm:justify-start">
            <a
              href="#servicios"
              className="block underline text-lg lg:text-xl text-teal-500 mt-4 sm:mt-0"
            >
              De que se trata esto?{' '}
            </a>

            <a
              href="tel:3764200079"
              className="sm:ml-4 shadow-md inline-block bg-teal-500 hover:bg-teal-600 text-white px-4 py-3 rounded-lg text-lg lg:text-xl"
            >
              RESERVA UNA CITA
            </a>
          </div>
        </div>
        <div className="w-full mt-4 md:mt-0 md:w-1/2 md:pl-10">
          <Img
            className="rounded-lg overflow-auto"
            fluid={mariaElena.childImageSharp.fluid}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
