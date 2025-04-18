import React from 'react';
import Cousin from './Cousin';
const Uncle = ({asset}) => {
  return (
    <div>
      <h3>Uncle</h3>
     <section className='flex'>
     <Cousin name="Nayem"></Cousin>
     <Cousin name="Nadim" asset={asset}></Cousin>
     </section>
    </div>
  );
};

export default Uncle;