import React from 'react';

const Jumbotron = () => {
  return (
    <div id="jumbotron-bg" className="mb-60">
      <div className="relative mx-auto max-w-3xl px-6 pt-20 pb-32 sm:pt-48 sm:pb-40 lg:px-8">
        <div>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="ring-black-900/10 relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1">
              <span className="text-gray-900">
                Visit our laboratory activities.{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </span>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
              We provide top quality radionuclides
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
              We have 5 nuclear labs in Jakarta, Yogyakarta, and Bandung that
              support us to extract best quality nuclear materials to serve your
              business
            </p>
            <div className="mt-8 flex gap-x-4 sm:justify-center">
              <a
                href="#"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-900"
              >
                Visit our labs
              </a>
              <a
                href="#"
                className="ring-black-900/10 inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 hover:ring-2"
              >
                Visit our office
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
