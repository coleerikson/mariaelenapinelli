import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const officeSVG = () => (
  <svg
    version="1.1"
    className="mr-3"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    viewBox="0 0 32 32"
  >
    <path
      className="feather_een"
      d="M24,23h-2c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2  C25,23.448,24.552,23,24,23z M24,26h-2v-2h2V26z M10,23H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2  C11,23.448,10.552,23,10,23z M10,26H8v-2h2V26z M24,12h-2c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2  C25,12.448,24.552,12,24,12z M24,15h-2v-2h2V15z M10,12H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2  C11,12.448,10.552,12,10,12z M10,15H8v-2h2V15z M17,12h-2c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2  C18,12.448,17.552,12,17,12z M17,15h-2v-2h2V15z M24,6h-2c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V7  C25,6.448,24.552,6,24,6z M24,9h-2V7h2V9z M10,6H8C7.448,6,7,6.448,7,7v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V7  C11,6.448,10.552,6,10,6z M10,9H8V7h2V9z M17,6h-2c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V7  C18,6.448,17.552,6,17,6z M17,9h-2V7h2V9z M29,1.5L29,1.5C29,1.224,28.776,1,28.5,1h-25C3.224,1,3,1.224,3,1.5v0  C3,1.776,3.224,2,3.5,2H4v16H3.5C3.224,18,3,18.224,3,18.5l0,0C3,18.776,3.224,19,3.5,19H4v9c0,1.657,1.343,3,3,3h18  c1.657,0,3-1.343,3-3v-9h0.5c0.276,0,0.5-0.224,0.5-0.5l0,0c0-0.276-0.224-0.5-0.5-0.5H28V2h0.5C28.776,2,29,1.776,29,1.5z M18,30  h-4v-5.279l2-0.667l2,0.667V30z M27,28c0,1.103-0.897,2-2,2h-6v-6l-3-1l-3,1v6H7c-1.103,0-2-0.897-2-2v-7h22V28z M27,20H5v-1h22V20z   M27,18H5V4h22V18z M27,3H5V2h22V3z"
    />
  </svg>
);

const mailSVG = () => (
  <svg
    version="1.1"
    className="mr-3"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    viewBox="0 0 32 32"
  >
    <path
      className="feather_een"
      d="M28,6h-1V5c0-1.657-1.343-3-3-3H8C6.343,2,5,3.343,5,5v1H4C2.343,6,1,7.343,1,9v18c0,1.657,1.343,3,3,3  h24c1.657,0,3-1.343,3-3V9C31,7.343,29.657,6,28,6z M27,7h1c0.37,0,0.712,0.108,1.01,0.283L27,9.293V7z M6,5c0-1.103,0.897-2,2-2h16  c1.103,0,2,0.897,2,2v5.293l-10,10l-10-10V5z M4,7h1v2.293l-2.01-2.01C3.288,7.108,3.63,7,4,7z M2,27V9  c0-0.37,0.108-0.712,0.283-1.01L12.293,18L2.283,28.01C2.108,27.712,2,27.37,2,27z M28,29H4c-0.37,0-0.712-0.108-1.01-0.283  L13,18.707L15.293,21c0.391,0.391,1.024,0.391,1.414,0L19,18.707l10.01,10.01C28.712,28.892,28.37,29,28,29z M30,27  c0,0.37-0.108,0.712-0.283,1.01L19.707,18l10.01-10.01C29.892,8.288,30,8.63,30,9V27z M12,7.5C12,7.224,12.224,7,12.5,7h7  C19.776,7,20,7.224,20,7.5S19.776,8,19.5,8h-7C12.224,8,12,7.776,12,7.5z M12,9.5C12,9.224,12.224,9,12.5,9h7  C19.776,9,20,9.224,20,9.5S19.776,10,19.5,10h-7C12.224,10,12,9.776,12,9.5z M19.5,12h-7c-0.276,0-0.5-0.224-0.5-0.5  s0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5S19.776,12,19.5,12z"
    />
  </svg>
);

const phoneSVG = () => (
  <svg
    version="1.1"
    className="mr-3"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    viewBox="0 0 32 32"
  >
    <g>
      <g>
        <path
          className="linesandangles_een"
          d="M4,23l0.01-0.01c0,0-0.001,0-0.001,0C4.003,22.99,4,22.993,4,23z"
        />
        <path
          className="linesandangles_een"
          d="M27.315,8.315L23,4l-7,7l3,3l-5,5l-3-3l-6.99,6.99c0.19,0.009,2.984,2.909,4.306,4.292    c0.379,0.397,0.899,0.615,1.44,0.615c0.078,0,0.157-0.005,0.236-0.014c9.386-1.104,16.787-8.505,17.891-17.891l0.004-0.03    C27.958,9.355,27.747,8.747,27.315,8.315z M9.762,25.9c-1.252-1.31-2.172-2.267-2.867-2.967L11,18.828l3,3L21.828,14l-3-3    l4.166-4.166l2.902,2.925C24.897,18.26,18.26,24.897,9.762,25.9z"
        />
      </g>
      <g>
        <path
          className="linesandangles_een"
          d="M4,23l0.01-0.01c0,0-0.001,0-0.001,0C4.003,22.99,4,22.993,4,23z"
        />
        <path
          className="linesandangles_een"
          d="M27.315,8.315L23,4l-7,7l3,3l-5,5l-3-3l-6.99,6.99c0.19,0.009,2.984,2.909,4.306,4.292    c0.379,0.397,0.899,0.615,1.44,0.615c0.078,0,0.157-0.005,0.236-0.014c9.386-1.104,16.787-8.505,17.891-17.891l0.004-0.03    C27.958,9.355,27.747,8.747,27.315,8.315z M9.762,25.9c-1.252-1.31-2.172-2.267-2.867-2.967L11,18.828l3,3L21.828,14l-3-3    l4.166-4.166l2.902,2.925C24.897,18.26,18.26,24.897,9.762,25.9z"
        />
      </g>
    </g>
  </svg>
);

const clockSVG = () => (
  <svg
    version="1.1"
    className="mr-3"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    viewBox="0 0 32 32"
  >
    <path d="M17,25c0,0.552-0.448,1-1,1s-1-0.448-1-1c0-0.552,0.448-1,1-1S17,24.448,17,25z M16,8  c0.552,0,1-0.448,1-1c0-0.552-0.448-1-1-1s-1,0.448-1,1C15,7.552,15.448,8,16,8z M7,15c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1  s1-0.448,1-1C8,15.448,7.552,15,7,15z M28,16c0,6.617-5.383,12-12,12S4,22.617,4,16S9.383,4,16,4S28,9.383,28,16z M27,16  c0-6.075-4.925-11-11-11S5,9.925,5,16s4.925,11,11,11S27,22.075,27,16z M25,15c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1  s1-0.448,1-1C26,15.448,25.552,15,25,15z M30,16c0,7.732-6.268,14-14,14S2,23.732,2,16S8.268,2,16,2S30,8.268,30,16z M29,16  c0-7.168-5.832-13-13-13S3,8.832,3,16s5.832,13,13,13S29,23.168,29,16z M16.951,16.244C16.971,16.164,17,16.086,17,16  c0-0.366-0.206-0.673-0.5-0.847V10c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v5.153C15.206,15.327,15,15.634,15,16  c0,0.552,0.448,1,1,1c0.086,0,0.164-0.029,0.244-0.049l5.403,5.403C21.744,22.451,21.872,22.5,22,22.5s0.256-0.049,0.354-0.146  c0.195-0.195,0.195-0.512,0-0.707L16.951,16.244z" />
  </svg>
);

const Contacto = () => {
  const { mapa } = useStaticQuery(graphql`
    query {
      mapa: file(relativePath: { eq: "odontologo-posadas-mapa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <div className="px-2 pt-8 pb-10 sm:pt-8 md:pb-8 border-b">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center py-0 sm:py-4 w-full md:w-1/2">
          <h3 className="text-3xl font-bold text-blue-900 mb-4" name="contacto">
            Contacto y Ubicación
          </h3>
          <div className="flex py-5 pl-4">
            {officeSVG()}
            <div
              itemProp="address"
              itemScope
              itemType="http://schema.org/PostalAddress"
            >
              <h5 className="text-lg font-bold text-teal-500 sans-serif">
                Ubicación
              </h5>
              <a
                href="https://goo.gl/maps/DcvqmbadCgei6SYx6"
                className="text-gray-800 sans-serif underline"
                target="_blank"
                rel="noopener noreferrer"
                itemProp="streetAddress"
              >
                25 de Mayo 1856
              </a>
              <br />
              <span className="text-gray-800" itemProp="addressLocality">
                Posadas
              </span>
              ,{' '}
              <span className="text-gray-800" itemProp="addressRegion">
                Misiones
              </span>
            </div>
          </div>
          <div className="flex py-5 pl-4">
            {phoneSVG()}
            <div>
              <h5 className="text-lg font-bold text-teal-500 sans-serif">
                Teléfono
              </h5>
              <a
                href="tel:3764 200079"
                className="text-gray-800 underline sans-serif"
                itemProp="telephone"
              >
                3764 200079
              </a>
            </div>
          </div>
          <div className="flex py-5 pl-4">
            {mailSVG()}
            <div>
              <h5 className="text-lg font-bold text-teal-500">Email</h5>
              <a
                href="mailto:elepinelli@hotmail.com"
                className="underline sans-serif text-gray-800"
              >
                elepinelli@hotmail.com
              </a>
            </div>
          </div>
          <div className="flex py-5 pl-4">
            {clockSVG()}
            <div>
              <h5 className="text-lg font-bold text-teal-500 sans-serif">
                Horarios de atención
              </h5>
              <h4 className="text-gray-800 sans-serif">
                Manañas: Martes y Jueves de 8:30 - 11:00
                <br />
                Tardes: Lunes a Viernes de 16:00 - 20:00
              </h4>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center pl-0 md:pl-4 md:pl-8 pr-0 w-full md:w-1/2">
          <a
            href="https://goo.gl/maps/DcvqmbadCgei6SYx6"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              className="rounded-lg overflow-auto border"
              fluid={mapa.childImageSharp.fluid}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
