import React, { useState } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css';
import { createContext } from 'react';

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);
const FamilyTree = () => {
  const [money, setMoney] = useState(0);
  const asset = 'Diamond';
  const newAsset = 'Gold';
  return (
    <div className='family-tree'>
      <h2>Family Tree</h2>
      <h3>Total Money: {money}</h3>
      <MoneyContext.Provider value={[money,setMoney]}>
      <AssetContext.Provider value={newAsset}>
      <Grandpa asset = {asset}></Grandpa>
      </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default FamilyTree;