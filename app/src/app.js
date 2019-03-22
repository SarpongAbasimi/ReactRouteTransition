import React from 'react';
import './app.css';
import { BrowserRouter , Switch ,Route } from 'react-router-dom'

import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contacts } from './components/contacts/contact';

import { Nav } from './components/nav/nav';


export class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            links : ['Home', 'About']
        }
    }

    render(){
        return(
            <BrowserRouter>
              <div>
               <Nav/>
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={About}/>
                  <Route path='/contact' component={Contacts}/>
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}