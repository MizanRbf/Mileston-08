import React from 'react';
import Spacial from './Spacial';
const Cousin = ({name,asset}) => {
  return (
    <div>
      <h3>{name}</h3>
      {
        name === 'Nadim' && <Spacial asset={asset}></Spacial>
      }
      {
        name === 'Forida' && <Spacial asset={asset}></Spacial>
      }
    </div>
  );
};

export default Cousin;<h3>{name}</h3>