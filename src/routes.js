import React from 'react'
import Wizard from './Components/Wizard/Wizard'
import Dashboard from './Components/Dashboard/Dashboard'
import {Switch, Route} from 'react-router-dom'

export default  (
  <Switch>
    <Route path="/wizard" component={Wizard} />
    <Route path="/" component={Dashboard} />
  </Switch>
)