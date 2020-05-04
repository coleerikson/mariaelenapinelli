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
        <section className="px-6 pt-8 mt-2 border-t">
          <h4 className="text-lg font-bold text-blue-900">Ortodoncia</h4>
          <p className="text-gray-700 mb-8 text-lg">
            La ortodoncia es una especialidad de la odontología que se encarga
            de todo el estudio, prevención, diagnóstico y tratamiento de las
            anomalías de forma, posición, relación y función de las estructuras
            dentomaxilofaciales. Su ejercicio es el arte de diagnosticar,
            prevenir, interceptar y corregir sus posibles alteraciones y
            mantenerlas dentro de un estado óptimo de salud y armonía mediante
            el uso y control de diferentes tipos de fuerzas.
          </p>

          <h4 className="text-lg font-bold text-blue-900">Objetivos</h4>
          <p className="text-gray-700 text-lg">
            La ortodoncia tiene como objetivo la ubicación correcta de los
            dientes con el fin de conseguir una mordida adecuada para una óptima
            masticación y una correcta apariencia estética, siempre a través de
            tratamientos específicos y personalizados a cada paciente. De este
            modo se protege la salud de nuestra dentición haciéndola más
            duradera y aportando mayor calidad de vida.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  </Layout>
);
