import React from 'react';

const SimpleForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.email.value)
  }
  return (
    <div>
      <h1>Explore React Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Name'/>
        <br />
        <input type="email" name="email" placeholder='Email' />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;