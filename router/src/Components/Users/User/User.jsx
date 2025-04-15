import React from 'react';
import { Link } from 'react-router';
const User = ({user}) => {
  // const [name, email,phone] = user;
  const userStyle = {
    border: '1px solid green',
    borderRadius:'10px',
    marginBottom: '10px',
  }
  return (
    <div style={userStyle}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <small>{user.phone}</small> <br />
      <br />
      <Link to={`/users/${user.id}`}>Show Details</Link>
    </div>
  );
};

export default User;