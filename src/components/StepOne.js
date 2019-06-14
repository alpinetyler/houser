import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Wizard extends Component {
    constructor(props) {
        super(props)
        
        
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
       
    }

    handleChange = e => {
        let { value, name } = e.target

        this.setState({
            [name]: value
        })
    }
    

    render() {
        return (
            <div>
                
                <h1>Add New Listing</h1>
                <p>Name:<input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={this.handleChange}
                    value={this.state.name} /></p>
                <p>Product Address:<input
                    type="text"
                    name="address"
                    placeholder="Adress"
                    onChange={this.handleChange}
                    value={this.state.address} /></p>
                <p>City:<input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={this.handleChange}
                    value={this.state.city} /></p>
                <p>State:<input
                    type="text"
                    name="state"
                    placeholder="State"
                    onChange={this.handleChange}
                    value={this.state.state} /></p>
                <p>Zip:<input
                    type="text"
                    name="zip"
                    placeholder="Zip"
                    onChange={this.handleChange}
                    value={this.state.zip} /></p>
                    <button onClick={this.handleClick}>Complete</button>
                

            </div>
        )
    }
}
