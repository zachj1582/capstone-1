import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ProductView from './components/ProductView'
import Cart from './components/Cart'
import Details from './components/Details'


export default (
    <Switch>
        <Route exact path='/' component={ProductView}/>
        <Route path='/cart' component={Cart} />
        <Route path='/details' component={Details} />

    </Switch>
)