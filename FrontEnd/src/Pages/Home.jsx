import React from 'react';
import Jumbotron from '../Components/Home/Jumbotron';
import WhyUs from '../Components/Home/WhyUs';
import HomeProducts from '../Components/Home/HomeProducts';
import HomeIndustry from '../Components/Home/HomeIndustry';
import { Faq } from '../Components/Home/Faq';

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <WhyUs />
      <HomeIndustry />
      <HomeProducts />
      <Faq />
    </div>
  );
};

export default Home;
