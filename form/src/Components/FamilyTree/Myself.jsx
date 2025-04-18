import React from 'react';
import Spacial from './Spacial';
const Myself = ({asset}) => {
  return (
    <div>
      <h3>Myself</h3>
        <Spacial name="Mahfuz" asset={asset}></Spacial>
    </div>
  );
};

export default Myself;