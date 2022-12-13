import React from 'react';

import { whyUsData as propsData } from '../../../CardData';
import Cards from './Cards';

const WhyUs = () => {
  return (
    <div className="mx-auto my-72 max-w-screen-lg text-center">
      <h1 className="text-4xl sm:text-6xl">Why Us</h1>

      <Cards propsData={propsData} />
    </div>
  );
};

export default WhyUs;
