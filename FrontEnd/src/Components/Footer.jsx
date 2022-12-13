import React from 'react';
import { Card } from '@material-tailwind/react';

const Footer = () => {
  return (
    <div>
      <hr className="mx-auto my-8 w-11/12 font-black" />
      <Card className="mx-auto mb-6 w-11/12 p-10 text-center">
        <h1 className=" text-lg">
          &#169;Made with love by : Kelompok 2 Sistem Basis Data
        </h1>
      </Card>
    </div>
  );
};

export { Footer };
