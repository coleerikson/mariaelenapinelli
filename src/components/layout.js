import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>{title}</title>
        <meta name="content" description={description}></meta>

        <script type="application/ld+json">
          {{
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            image: [
              'https://www.mariaelenapinelli.com/static/b26650f7e4bddb8dccc95e1d5b67fbfa/f5db2/odontologo-posadas-maria-elena-pinelli.jpg',
            ],
            '@id': 'http://mariaelenapinelli.com',
            name: 'Odontóloga Maria Elena Pinelli',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '25 de Mayo 1856',
              addressLocality: 'Posadas',
              addressRegion: 'Misiones',
              postalCode: 'N3301',
              addressCountry: 'AR',
            },
            telephone: '+543764200079',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Tuesday', 'Thursday'],
                opens: '08:30',
                closes: '11:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: '16:00',
                closes: '20:00',
              },
            ],
          }}
        </script>
      </Helmet>

      <div className="bg-mint">{children}</div>
    </>
  );
};

export default Layout;
