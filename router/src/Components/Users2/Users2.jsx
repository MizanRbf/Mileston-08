import React from 'react';
import { use } from 'react';
import User2 from './User2/User2';
const Users2 = ({fetchUsers2}) => {
  const response = use(fetchUsers2);
  return (
    <div>
      {
        response.map(user2 => <User2 user2={user2}></User2>)
      }
    </div>
  );
};

export default Users2;