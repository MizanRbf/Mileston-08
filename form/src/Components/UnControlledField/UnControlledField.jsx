import React, { useRef } from 'react';

const UnControlledField = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
const handleSubmit = (event)=> {
  event.preventDefault();
  
  console.log(emailRef.current.value);
  const email = emailRef.current.value;
  console.log()
  const password = passwordRef.current.value;
  console.log(passwordRef.current.value);

}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" ref={emailRef} name="email"/>
        <br />
        <input type="password" ref={passwordRef} name="password"/>
        <br />
        <input type="submit" value='Submit' />
      </form>
    </div>
  );
};

export default UnControlledField;