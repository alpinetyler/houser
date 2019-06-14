import React, { Component } from 'react'

export default class House extends Component {


    render() {
        let { name, address, city, state, zip, id } = this.props.house
        return (
            <section className="houseWrapper">
                <div className="houseDisplay">
                    <p>Name: {name}</p>
                    <p>Address: {address}</p>
                    <p>{city}, {state}, {zip}</p>
                    <button onClick={() => this.props.deleteHouse(id)}>Delete</button>
                </div>
            </section>
        )
    }
}