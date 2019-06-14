import React, { Component } from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import axios from 'axios'
import StepOne from '../StepOne'
import StepTwo from '../StepTwo'
import StepThree from '../StepThree'


export default class Wizard extends Component {

    render() {
        return (

            <div>
                <Link to={'/'}>
                    <button>Cancel</button>
                </Link>

                <Switch>
                    <Route path='/wizard/StepOne' component={StepOne} />
                    <Route path='/wizard/StepTwo' component={StepTwo} />
                    <Route path='/wizard/StepThree' component={StepThree} />
                </Switch>


            </div>
        )

    }
}













