import React, { Component } from 'react';
import { Link } from "react-router-dom"
import countries from "../countries.json"

class Home extends Component {
    componentDidMount() {
        console.log(this)
    }

    showCountries = () => {
        let links = countries.map(eachCountry => {
            return <li className="countries-list"><button type="button" class="btn btn-light"><Link to={`/country/${eachCountry.cca3}`}>{eachCountry.flag}{eachCountry.name.common}</Link></button></li>})
        return links
    }

    render() {

        return (
            <div>
                {this.showCountries()}
            </div>
        );
    }
}

export default Home;