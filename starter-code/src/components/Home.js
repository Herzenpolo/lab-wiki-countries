import React, { Component } from 'react';
import { Link } from "react-router-dom"
import countries from "../countries.json"

class Home extends Component {
    componentDidMount() {
        console.log(this)
    }

    showCountries = () => {
        let links = countries.map(eachCountry => {
            return <li><Link to={`/country/${eachCountry.cca3}`}>{eachCountry.name.common}</Link></li>})
        return links
    }

    render() {

        return (
            <div>
                Home Page

                {this.showCountries()}
            </div>
        );
    }
}

export default Home;