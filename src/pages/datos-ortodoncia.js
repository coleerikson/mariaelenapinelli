import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Footer from '../components/footer';

import Nav from '../components/nav';

export default () => (
  <Layout>
    <Nav />
    <main className="px-2 md:px-4">
      <div className="bg-white px-2 sm:px-5 py-8 rounded-lg shadow-2xl max-w-6xl mx-auto">
        <section className="px-2 sm:px-6 pt-8 mt-2">
          <h1 className="text-4xl mb-2 text-center font-bold text-blue-900">
            Datos de Ortodoncia
          </h1>
          <h3 className="text-lg mb-4 text-center font-lg text-teal-600">
            Por Maria Elena Pinelli
          </h3>
          <p className="text-gray-700 mb-8 text-lg">
            A partir de la aparición de los primeros dientes es conveniente
            comenzar con los buenos hábitos de HIGIENE DENTAL, con un cepillo de
            dientes pequeño con cerdas muy suaves.
            <br />
            <br />
            La higiene debe ser realizada una vez al dia por lo menos por UN
            ADULTO, ideal a la noche antes de dormir. En su crecimiento es
            importante que incorporen el habito de su higiene dental luego de
            cada comida. Y como padres acompañarlos hasta los 6 o 7 años con la
            higiene, no dejarla totalmente en sus manos.
          </p>

          <h3 className="text-lg font-bold text-blue-900">La Succion</h3>
          <p className="text-gray-700 text-lg">
            Esto incluye el pecho de la mama, mamadera, chupete, vasos con
            tetina, entre otros, es excelente hasta los 2 AÑOS de vida. Luego de
            esa edad comienza a ser perjudicial para el niño en varios aspectos
            de su crecimiento ( alteraciones en el desarrollo de sus maxilares
            afectando la mordida, en la pronunciación de algunos fonemas, etc).
          </p>

          <p className="text-gray-700 text-lg">
            Para los infantes que usan MAMADERA (0 -2 años): NUNCA colocar
            bebidas/líquidos con AZUCAR en la misma, ya sea leche con azúcar,
            jugos, yogurt,etc. En la mamadera se toma leche sin azúcar y
            agua...el resto en vasitos. El "azúcar en mamadera" trae la rápida
            aparición de las famosas "caries de biberón".
          </p>
          <ul className="list-disc mb-8">
            <li className="text-gray-700 text-lg ml-8">
              El Fluor es un buen suplemento en prevención de caries para
              acompañar a la higiene dental. Según la edad es la forma y
              cantidad a indicar.
            </li>
          </ul>

          <div className="flex justify-center">
            <Link
              to={'/'}
              className="bg-teal-600 hover:bg-teal-700 text-white inline-block text-center text-base mx-auto rounded px-6 py-3 shadow"
            >
              A la página de principal
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  </Layout>
);
