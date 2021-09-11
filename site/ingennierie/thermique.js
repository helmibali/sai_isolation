import ReactReact, { Component } from 'react';
import thermique from '../../Assets/thermique.jpg'

   class Thermique extends Component {


    componentDidMount = () =>{
        document.title = "Thermique";
    }

       render(){
       return (
        <>
        <img src={thermique} width="100%" height="400px"/>
    </>
           );
       }
   }
   export default Thermique;