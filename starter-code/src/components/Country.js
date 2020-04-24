import React, { Component } from 'react';
import { Link } from "react-router-dom"
import countries from '../countries.json'

class Country extends Component {

// componentDidMount(){
//     // console.log(this.props.match.params.id)
// }

    render() {
        console.log(this.props)
        //console.log(this.props.match.params.id)
        return (
            <div>
               Hello World
            </div>
        );
    }
}

export default Country;
