import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';

ReactDOM.render(
 
  <Container>
  <App/>
  </Container>,
        
  document.querySelector('#root')
);