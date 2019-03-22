import React from 'react';
import './home.css';


export class Home extends React.Component{
    render(){
        return(
            <div className='homeContainer'>
              <h1> Welcome Home </h1>
              <p> This is the home page </p>
            </div>
        );
    }
}