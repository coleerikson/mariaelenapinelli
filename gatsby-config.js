module.exports = {
  siteMetadata: {
    title: 'Maria Elena Pinelli - Odontóloga en Posadas, Misiones.',
    description: 'Pagina web de Odontóloga Maria Elena Pinelli.',
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
  ],
};
