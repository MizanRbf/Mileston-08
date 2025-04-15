import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User/User';

const Users = () => {
  const users = useLoaderData();

  const usersStyle = {
    display: 'grid',
    gridTemplateColumns:'repeat(2,1fr)',
    gap: '10px'
  }
  
  return (
    <div style={usersStyle}>
      {
        users.map(user => 
        <User user={user} key={user.id}></User>)
      }
    </div>
  );
};

export default Users;