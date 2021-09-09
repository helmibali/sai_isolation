import React, { Component } from 'react';
import './App.css';
import Site from './site/site';
import {BrowserRouter} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends Component {
  render() {
    return (
     
      <div>
       <BrowserRouter>
       <Site />
       </BrowserRouter>
      </div>
    );
  }
}
export default App;
