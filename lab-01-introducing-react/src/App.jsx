import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Greeting from './Component/Greeting';

const App = () => {
    // logic
console.log('App loaded');

const [name, setName] = useState();

// returned visual element
return (  
<>
  <input
    onChange={({target: {value}}) => setName(value)}
    placeholder="Enter your name"
  />
  <Greeting name={name}/>
</>
);
};

export default App;