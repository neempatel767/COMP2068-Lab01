import React  from 'react';
import {Container, Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.css';

const Greeting = ({name}) => {
    console.log('Loading Greetings');
       
    
    return(
        <Jumbotron>
        <h2>Hello, {name}! Welcome to the animated world! </h2>
        </Jumbotron>
    );
};

export default Greeting;