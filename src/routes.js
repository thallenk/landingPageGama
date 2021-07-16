import Home from './pages/home'
import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = '/' exact component = {Home}/>
            </Switch>
        </BrowserRouter>

    )
}