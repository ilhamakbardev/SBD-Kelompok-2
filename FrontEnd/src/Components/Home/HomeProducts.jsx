import React from 'react';
import { productsData as propsData } from '../../../CardData';
import Cards from './Cards';

const HomeProducts = () => {
  return (
    <div className="mx-auto my-80 max-w-screen-lg text-center">
      <h1 className="mt-36 text-4xl sm:text-6xl">Our Great Products</h1>

      <Cards propsData={propsData} />
    </div>
  );
};

export default HomeProducts;
