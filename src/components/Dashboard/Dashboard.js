import React, {Component} from 'react'
import House from '../../components/House/House'

export default class Dashboard extends Component{


    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <House />
            </div>
        )
    }
}