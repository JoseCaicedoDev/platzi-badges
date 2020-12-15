import React from 'react'
import { BrowserRouter, Switch,  Route } from 'react-router-dom'

import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import Home from '../pages/Home'

import Layout from './Layout'
import NotFound from '../pages/NotFound'

function App(){
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/badges" component={Badges}></Route>
          <Route exact path="/badges/new" component={BadgeNew}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App