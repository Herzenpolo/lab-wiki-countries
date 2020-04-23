import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Contact extends Component {
    componentDidMount(){
        console.log(this)
    }
    
    render() {
        return (
            <div>
                Contact Page
            </div>
        );
    }
}

export default Contact;