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
      sign_up_route,
      sign_out_route,
      current_user
    } = this.props
    return (
      <Router>

        <Header />

        <Switch>
          <Route exact path="/" component={ Home } />

          <Route path="/apartmentedit/:id" component={ ApartmentEdit } />

          <Route path="/apartmentindex" render={ (props) => <ApartmentIndex
            apartments={this.state.apartments} /> } />

          <Route path="/apartmentnew" component={ ApartmentNew } />

          <Route
            path="/apartmentshow/:id"
            render={ (props) => {
              let localid = props.match.params.id
              let apartment = this.state.apartments.find(apt => apt.id === parseInt(localid))
              return (
                <ApartmentShow apartment={ apartment } />
              )
            } }
          />

          <Route component={ NotFound } />
        </Switch>

        <Footer
          logged_in={ logged_in }
          sign_in_route={ sign_in_route }
          sign_up_route={ sign_up_route }
          sign_out_route={ sign_out_route }
        />
      </Router>
    )
  }
}

export default App
