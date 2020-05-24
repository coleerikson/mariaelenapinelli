import React from 'react';

const Nav = () => (
  <nav className="bg-mint max-w-6xl mx-auto">
    <div className="py-0 sm:py-2 px-5 md:px-6">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <h3 className="text-teal-800 font-bold">
              Dra. Maria Elena Pinelli
            </h3>
          </div>
        </div>
        <div className="md:hidden">
          <a href="#contacto" className="text-teal-900 underline">
            Contacto
          </a>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <div className="">
              <h3 className="text-teal-900 text-sm flex items-center">
                <a href="tel:3764200079" className="underline">
                  376 4200079
                </a>
              </h3>
            </div>
            <div className="ml-4">
              <h3 className="text-teal-900 text-sm flex items-center">
                <span className="text-teal-900 text-4xl mr-4">&#183;</span>
                <a
                  href="https://goo.gl/maps/DcvqmbadCgei6SYx6"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  25 de Mayo 1856
                </a>
              </h3>
            </div>
            <div className="ml-4">
              <h3 className="text-teal-900 text-sm flex items-center">
                <span className="text-teal-900 text-4xl mr-4">&#183;</span>
                <a href="mailto:elepinelli@hotmail.com" className="underline">
                  elepinelli@hotmail.com
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
