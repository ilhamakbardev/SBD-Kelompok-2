import React from 'react';
import { aboutUsData as propsData } from '../../../CardData';
import Cards from '../Home/Cards';

const AboutUs = () => {
  return (
    <div className="mx-auto my-72 max-w-screen-lg text-center">
      <h1 className="text-4xl sm:text-6xl">About Us</h1>

      <Cards propsData={propsData} />
    </div>
  );
};

export default AboutUs;
