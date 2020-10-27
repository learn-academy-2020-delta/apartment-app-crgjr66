import React, { Component } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import ApartmentEdit from './pages/ApartmentEdit'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentShow from './pages/ApartmentShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import mockApartments from './mockApartments.js'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>
        <h1>Hello World!!!</h1>
        { logged_in &&
          <div>
            <a href={ sign_out_route }>Sign Out</a>
          </div>
        }

        { !logged_in &&
          <div>
            <a href={ sign_in_route }>Sign In</a>
          </div>
        }
        <Header />

        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/apartmentedit/:id" component={ ApartmentEdit } />
          <Route path="/apartmentindex" component={ ApartmentIndex } />
          <Route path="/apartmentnew" component={ ApartmentNew } />
          <Route path="/apartmentshow/:id" component={ ApartmentShow } />
          <Route component={ NotFound } />
        </Switch>

        <Footer />
      </Router>
    )
  }
}

export default App
