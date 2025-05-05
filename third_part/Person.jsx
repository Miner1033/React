import React from 'react';

const Person = () => {
  const name = "rimon";
  const age = 20;

  const person = {
    name: 'Miner',
    age: 23,
    gmail: 'minerhossainrimon1033@gmail.com',
    mobile_number: 1763699850
  };

  const product = {
    title: "iphone",
    model: 'iphone-15',
    price: 70000
  };

  return (
    <>
      <div>
        <h1>This is react course</h1>
        
        {/* Removed <Hello /> and <Random /> */}

        <h1>Name = {person.name}</h1>
        <h1>Age = {person.age}</h1>
        <h1>Gmail = {person.gmail}</h1>
        <h1>Mobile Number = {person.mobile_number}</h1>
      </div>

      <div>
        <h3>Title = {product.title}</h3>
        <h3>Model = {product.model}</h3>
        <h4>Price = {product.price}</h4>
      </div>
    </>
  );
}

export default Person;
