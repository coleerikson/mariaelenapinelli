import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const officeSVG = () => (
  <svg
    version="1.1"
    id="DESIGNS"
    x="0px"
    y="0px"
    width="32px"
    height="32px"
    viewBox="0 0 32 32"
  >
    <path
      class="feather_een"
      d="M24,23h-2c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2  C25,23.448,24.552,23,24,23z M24,26h-2v-2h2V26z M10,23H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2  C11,23.448,10.552,23,10,23z M10,26H8v-2h2V26z M24,12h-2c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2  C25,12.448,24.552,12,24,12z M24,15h-2v-2h2V15z M10,12H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2  C11,12.448,10.552,12,10,12z M10,15H8v-2h2V15z M17,12h-2c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2  C18,12.448,17.552,12,17,12z M17,15h-2v-2h2V15z M24,6h-2c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V7  C25,6.448,24.552,6,24,6z M24,9h-2V7h2V9z M10,6H8C7.448,6,7,6.448,7,7v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V7  C11,6.448,10.552,6,10,6z M10,9H8V7h2V9z M17,6h-2c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V7  C18,6.448,17.552,6,17,6z M17,9h-2V7h2V9z M29,1.5L29,1.5C29,1.224,28.776,1,28.5,1h-25C3.224,1,3,1.224,3,1.5v0  C3,1.776,3.224,2,3.5,2H4v16H3.5C3.224,18,3,18.224,3,18.5l0,0C3,18.776,3.224,19,3.5,19H4v9c0,1.657,1.343,3,3,3h18  c1.657,0,3-1.343,3-3v-9h0.5c0.276,0,0.5-0.224,0.5-0.5l0,0c0-0.276-0.224-0.5-0.5-0.5H28V2h0.5C28.776,2,29,1.776,29,1.5z M18,30  h-4v-5.279l2-0.667l2,0.667V30z M27,28c0,1.103-0.897,2-2,2h-6v-6l-3-1l-3,1v6H7c-1.103,0-2-0.897-2-2v-7h22V28z M27,20H5v-1h22V20z   M27,18H5V4h22V18z M27,3H5V2h22V3z"
    />
  </svg>
);

const mailSVG = () => (
  <svg
    version="1.1"
    id="DESIGNS"
    x="0px"
    y="0px"
    width="32px"
    height="32px"
    viewBox="0 0 32 32"
  >
    <path
      class="feather_een"
      d="M28,6h-1V5c0-1.657-1.343-3-3-3H8C6.343,2,5,3.343,5,5v1H4C2.343,6,1,7.343,1,9v18c0,1.657,1.343,3,3,3  h24c1.657,0,3-1.343,3-3V9C31,7.343,29.657,6,28,6z M27,7h1c0.37,0,0.712,0.108,1.01,0.283L27,9.293V7z M6,5c0-1.103,0.897-2,2-2h16  c1.103,0,2,0.897,2,2v5.293l-10,10l-10-10V5z M4,7h1v2.293l-2.01-2.01C3.288,7.108,3.63,7,4,7z M2,27V9  c0-0.37,0.108-0.712,0.283-1.01L12.293,18L2.283,28.01C2.108,27.712,2,27.37,2,27z M28,29H4c-0.37,0-0.712-0.108-1.01-0.283  L13,18.707L15.293,21c0.391,0.391,1.024,0.391,1.414,0L19,18.707l10.01,10.01C28.712,28.892,28.37,29,28,29z M30,27  c0,0.37-0.108,0.712-0.283,1.01L19.707,18l10.01-10.01C29.892,8.288,30,8.63,30,9V27z M12,7.5C12,7.224,12.224,7,12.5,7h7  C19.776,7,20,7.224,20,7.5S19.776,8,19.5,8h-7C12.224,8,12,7.776,12,7.5z M12,9.5C12,9.224,12.224,9,12.5,9h7  C19.776,9,20,9.224,20,9.5S19.776,10,19.5,10h-7C12.224,10,12,9.776,12,9.5z M19.5,12h-7c-0.276,0-0.5-0.224-0.5-0.5  s0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5S19.776,12,19.5,12z"
    />
  </svg>
);

const phoneSVG = () => (
  <svg
    version="1.1"
    id="DESIGNS"
    x="0px"
    y="0px"
    width="32px"
    height="32px"
    viewBox="0 0 32 32"
  >
    <g>
      <g>
        <path
          class="linesandangles_een"
          d="M4,23l0.01-0.01c0,0-0.001,0-0.001,0C4.003,22.99,4,22.993,4,23z"
        />
        <path
          class="linesandangles_een"
          d="M27.315,8.315L23,4l-7,7l3,3l-5,5l-3-3l-6.99,6.99c0.19,0.009,2.984,2.909,4.306,4.292    c0.379,0.397,0.899,0.615,1.44,0.615c0.078,0,0.157-0.005,0.236-0.014c9.386-1.104,16.787-8.505,17.891-17.891l0.004-0.03    C27.958,9.355,27.747,8.747,27.315,8.315z M9.762,25.9c-1.252-1.31-2.172-2.267-2.867-2.967L11,18.828l3,3L21.828,14l-3-3    l4.166-4.166l2.902,2.925C24.897,18.26,18.26,24.897,9.762,25.9z"
        />
      </g>
      <g>
        <path
          class="linesandangles_een"
          d="M4,23l0.01-0.01c0,0-0.001,0-0.001,0C4.003,22.99,4,22.993,4,23z"
        />
        <path
          class="linesandangles_een"
          d="M27.315,8.315L23,4l-7,7l3,3l-5,5l-3-3l-6.99,6.99c0.19,0.009,2.984,2.909,4.306,4.292    c0.379,0.397,0.899,0.615,1.44,0.615c0.078,0,0.157-0.005,0.236-0.014c9.386-1.104,16.787-8.505,17.891-17.891l0.004-0.03    C27.958,9.355,27.747,8.747,27.315,8.315z M9.762,25.9c-1.252-1.31-2.172-2.267-2.867-2.967L11,18.828l3,3L21.828,14l-3-3    l4.166-4.166l2.902,2.925C24.897,18.26,18.26,24.897,9.762,25.9z"
        />
      </g>
    </g>
  </svg>
);

const Hero = () => {
  const { infantil } = useStaticQuery(graphql`
    query {
      infantil: file(
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

  return (
    <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
      <div className="rounded-lg h-96">
        <div className="flex flex-col">
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-blue-900">
              Maria Elena Pinelli
            </h1>
            <p className="text-lg text-gray-700 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              venenatis felis a elit volutpat, nec pulvinar ipsum ultricies.
            </p>
            <div className="flex mb-4">{officeSVG()} 25 de Mayo 1856</div>
            <div className="flex mb-4">{phoneSVG()} (378) 420 0079</div>
            <div className="flex mb-4">
              {mailSVG()}{' '}
              <a href="mailto:elepinelli@hotmail.com">elepinelli@hotmail.com</a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <Img fluid={infantil.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
