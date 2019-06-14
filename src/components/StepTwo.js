import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Wizard extends Component {
    constructor(props) {
        super(props)

        this.state = {

            img: ''
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
                <p>Image Url:<input
                    type="text"
                    name="img"
                    placeholder="Image Url"
                    onChange={this.handleChange}
                    value={this.state.img} /></p>
                <Link to={'/wizard/StepOne'}>
                    <button>Previous Step</button>
                </Link>
                <Link to={'/wizard/StepThree'}>
                    <button>Next Step</button>
                </Link>

            </div>
        )
    }
}
