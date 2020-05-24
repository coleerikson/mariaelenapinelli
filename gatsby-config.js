module.exports = {
  siteMetadata: {
    title: 'Odontóloga en Posadas, Misiones - Maria Elena Pinelli',
    description:
      'Soy Maria Elena Pinelli Benitez, Odontologa especialista en Ortodoncia y Ortopedia de los Maxilares.',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-167447332-1',
        head: true,
      },
    },
  ],
};
