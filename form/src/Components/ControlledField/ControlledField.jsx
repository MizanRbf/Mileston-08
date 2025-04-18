import React, { useState } from 'react';

const ControlledField = () => {
  const [error,setError] = useState('');
  const handleSubmit = (event) => {
   event.preventDefault();
   if(password.length < 4){
    setError('must be 4 characters');
   }
   else{
    setError("");
   }
  }

  const [password, setPassword] = useState('');
  
  const handlePassword = (event) => {
   setPassword(event.target.value);
   if(password.length < 6){
    setError("Password must be 6 characters or longer")
   }
   else{
    setError('');
   }
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input type="text" name="name" placeholder='Name' required/> */}
        <input type="email" name="email" placeholder='Email' required/>
        <br />
        <input type="password" name="password" placeholder='password' required defaultValue={password} onChange={handlePassword}/>
        <br />
        <input type="submit" value='Submit' />
      </form>
      <p style={{color:"red"}}>
        {error}
      </p>
    </div>
  );
};

export default ControlledField;