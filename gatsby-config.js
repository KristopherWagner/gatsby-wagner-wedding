module.exports = {
  siteMetadata: {
    title: 'Wagner/Swanson Wedding',
    description: 'Wedding website for Kristopher Wagner and Shannon Swanson',
    author: '@KristopherWagner',
    siteUrl: 'https://swansonwagner.wedding/',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/bells.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
  ],
};
