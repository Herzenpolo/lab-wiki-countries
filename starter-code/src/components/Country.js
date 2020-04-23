import React, { Component } from 'react';
import { Link } from "react-router-dom"
import countries from '../countries.json'

class Country extends Component {
    
    componentDidMount(){
        console.log(this.props.match.params.id)
    }
    

    // countryClick = () => {
    // return countries.map(eachCountry => {
    //     return(
    //         <h1>{eachCountry.name.common}</h1>
    //     )    
    // })
    // }

    render() {
       
        return (
           
            <div>
                hello
            </div>
        );
    }
}

export default Country;