import React, { Component } from 'react';

import Formulaire from './Formulaire';
import Maps from './Maps';

class Contact extends Component {

    componentDidMount = () =>{
        document.title = "Contact";
    }

    render(){
    return (
<>
    <Maps/>
    <div className="container"><Formulaire/></div>
</>
        );
    }
}
export default Contact;

