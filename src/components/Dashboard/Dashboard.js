import React, { Component } from 'react'
import House from '../../components/House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {
            houses:[]
        }
    }

    componentDidMount() {
        axios.get('/api/gethouses').then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    render() {
        return(
            {this.state.houses.map(house => {
            return <House />
            
        }))}
        
        return (
            <div>
                
                <House />
                <Link to={'/wizard'}>
                <button>Add New Property</button>
                </Link>
            </div>
        )
    }
}