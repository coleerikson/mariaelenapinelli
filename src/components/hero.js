import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Hero = () => {
  const { mariaElena } = useStaticQuery(graphql`
    query {
      mariaElena: file(
        relativePath: { eq: "otrodonia-posadas-maria-elena-pinelli.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="rounded-lg h-96">
      <div className="flex flex-col md:flex-row lg:flex-row items-center">
        <div className="w-full md:w-2/3 pb-6">
          <h1 className="text-4xl font-bold text-blue-900 mb-3">
            Dra. Maria Elena Pinelli
          </h1>
          <p className="text-xl text-gray-800 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            venenatis felis a elit volutpat, nec pulvinar ipsum ultricies.
          </p>

          <p className="text-xl text-gray-800 mb-5">
            <em>
              "Con mis 17 años de experienca, puedo confirmar que Cole es el
              mejor primo que tengo. Mucho mejor que Chelo, Gaby, o Caro.
              Especialmente Lula."
            </em>
          </p>

          <p className="text-gray-600 mb-8">
            - Dra. Maria Elena Pinelli, Odontóloga
          </p>

          <a
            href="tel:3764200079"
            className="inline-block bg-blue-900 hover:bg-dentist-teal text-white px-8 py-4 rounded-lg text-lg"
          >
            RESERVA UNA CITA
          </a>
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
