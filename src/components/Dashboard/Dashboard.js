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

        this.deleteHouse = this.deleteHouse.bind(this);
    }

    

    componentDidMount = () => {
        axios.get('/api/gethouses').then(res => {
            this.setState({
                houses: res.data
            })
            console.log(res.data)
        })
    }

   deleteHouse(id){
       console.log(id)
        axios.delete(`/api/house/${id}`).then(res => {
          this.setState({
            messages: res.data
          });
        });
      };

    render() {
        // console.log(this.state.houses)
        return (
            <section>
                <Link to={'/wizard'}>
                <button>Add New Property</button>
                </Link>
            <div>
                {this.state.houses.map((house, id) => {
                    return (
                        <House
                            key={id}
                            id={id}
                            house={house} 
                            deleteHouse={this.deleteHouse}/>
                    )
                })}
                
            </div>
            </section>
            
        )
    }
}