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
          <h1
            className="text-center sm:text-left text-2xl sm:text-4xl font-bold text-blue-900 mb-3"
            itemProp="name"
          >
            Dra. Maria Elena Pinelli
          </h1>
          <p
            className="text-xl text-gray-800 mb-5 text-center sm:text-left "
            itemProp="description"
          >
            Soy Maria Elena Pinelli Benitez, Odontologa especialista en
            Ortodoncia y Ortopedia de los Maxilares.
          </p>
          <div class="flex items-center">
            <a
              href="#servicios"
              className="block underline text-xl text-gray-600"
            >
              De que se trata esto?{' '}
            </a>

            <a
              href="tel:3764200079"
              className="ml-4 inline-block bg-blue-900 hover:bg-dentist-teal text-white px-6 py-3 rounded-lg text-lg font-light"
            >
              RESERVA UNA CITA
            </a>
          </div>
        </div>
        <div className="w-full mt-4 md:mt-0 md:w-1/2 md:pl-10">
          <Img
            className="rounded-lg overflow-auto"
            fluid={mariaElena.childImageSharp.fluid}
            itemProp="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
