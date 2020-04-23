import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Country extends Component {
    
    componentDidMount(){
        console.log(this.props.match.params.id)
    }
    
    render() {
        return (
            <div>
                Country Detail
            </div>
        );
    }
}

export default Country;