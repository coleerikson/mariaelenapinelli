import React from 'react';

const Servicios = () => (
  <div className="px-5 py-6 sm:px-0">
    <div className="flex flex-col sm:flex-col md:flex-row">
      <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 py-4 px-8">
        <h3 className="text-lg font-bold text-blue-900">Servicio 1</h3>
        <p className=" text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          venenatis felis a elit volutpat, nec pulvinar ipsum ultricies.
        </p>
      </div>
      <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 py-4 px-8 border-l border-r border-gray-300">
        <h3 className="text-lg font-bold text-blue-900">Servicio 2</h3>
        <p className=" text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          venenatis felis a elit volutpat, nec pulvinar ipsum ultricies.
        </p>
      </div>
      <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 py-4 px-8">
        <h3 className="text-lg font-bold text-blue-900">Servicio 3</h3>
        <p className=" text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          venenatis felis a elit volutpat, nec pulvinar ipsum ultricies.
        </p>
      </div>
    </div>
  </div>
);

export default Servicios;
