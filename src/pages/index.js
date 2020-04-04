import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Datos from '../components/datos';
import Servicios from '../components/servicios';
import Footer from '../components/footer';

import Nav from '../components/nav';

export default () => (
  <Layout>
    <Nav />
    <main className="-mt-32 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-2xl p-10 max-w-6xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <Hero />
        <Datos />
        <Servicios />
      </div>
      <Footer />
    </main>
  </Layout>
);
