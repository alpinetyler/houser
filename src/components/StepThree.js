import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Wizard extends Component {
    constructor(props) {
        super(props)
       
       
        this.state = {
            mortgage: '',
            rent: ''
        }
       
    }

    handleChange = e => {
        let { value, name } = e.target

        this.setState({
            [name]: value
        })
    }
    handleClick = () => {
        let newHouse = this.state
        this.createHouse(newHouse)
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',

        })
    }

    createHouse = newHouse => {
        axios.post('/api/house', newHouse)
            .then(res => {
                this.setState({
                    houses: res.data,
                })
            }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                
                <h1>Add New Listing</h1>
                <p>Monthly Mortgage Amount:<input
                    type="text"
                    name="mortgage"
                    placeholder="Mortgage Amount"
                    onChange={this.handleChange}
                    value={this.state.mortgage} /></p>
                <p>Deired Monthly Rent:<input
                    type="text"
                    name="rent"
                    placeholder="Rent Amount"
                    onChange={this.handleChange}
                    value={this.state.rent} /></p>
                    <Link to={'/wizard/StepTwo'}>
                    <button>Previous Step</button>
                </Link>
                
                    <button onClick={this.handleClick}>Complete</button>
                

            </div>
        )
    }
}
