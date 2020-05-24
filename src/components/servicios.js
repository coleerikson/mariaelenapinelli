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
    <div className="px-2 sm:px-4 py-8 md:py-12 border-b" name="servicios">
      <div className="flex flex-col flex-col-reverse md:flex-row ">
        <div className="mt-4 md:mt-0 w-full md:w-1/2">
          <Img
            className="rounded-lg overflow-auto"
            fluid={mariaElenaOficina.childImageSharp.fluid}
          />
        </div>

        <div className="py-3 pl-0 sm:pl-8 pr-0 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-3">
            Ortopedia y Ortodoncia
          </h2>
          <div className="py-2">
            <h3 className="text-lg font-bold text-teal-500">Ortopedia</h3>
            <p className="text-gray-700">
              A los 6 años aproximadamente comienza el recambio dentario, es
              decir comienzan a caerse los primeros dientes de leche y se forma
              la dentición mixta (la boca tiene en ese momento tientes de leche
              y dientes permanentes).
            </p>
            <p className="text-gray-700">
              es momento de evaluar la relación de los maxilares entre sí, si
              hay discrepancia entre los mismos, traba en el crecimiento, etc.
              Si el caso requiere, se indica el uso de un aparato.
            </p>
            <p className="text-gray-700">
              Ortopédico aprovechando el crecimiento del niño para corregir la
              anomalía.
            </p>
          </div>
          <div className="py-4">
            <h3 className="text-lg font-bold text-teal-500">Ortodoncia</h3>
            <p className="text-gray-700">
              Se indica en dentición permanente 12 años aprox (con todos los
              dientes definitivos) para corregir problemas de mala mordida o
              "mala oclusión".
            </p>
            <p className="text-gray-700">
              El diagnóstico precoz y el tratamiento en el momento oportuno son
              fundamentales para lograr el equilibrio adecuado de
              Salud-Estética-Función bucal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
