import React, { Component } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import ApartmentEdit from './pages/ApartmentEdit'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentShow from './pages/ApartmentShow'
import MyApartmentIndex from './pages/MyApartmentIndex'
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

  createNewApartment = (newApartment) => {
    console.log(newApartment)
  }

  updateApartment = (apartment, id) => {
    console.log("apartment", apartment, "id", id)
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

          <Route path="/apartmentindex" render={ (props) => <ApartmentIndex
            apartments={this.state.apartments} /> } />

          { logged_in &&
            <Route
              path="/apartmentnew"
              render={ (props) =>
                <ApartmentNew
                  createNewApartment={ this.createNewApartment }
                  current_user={ current_user }
                />
              }
            />
          }

          { logged_in &&
            <Route
              path="/myapartmentindex"
              render={ (props) => {
                let user = current_user.id
                console.log(user)
                let apartments = this.state.apartments.filter(apartment => apartment.user_id === user)
                console.log(apartments)
                return (
                  <MyApartmentIndex apartments={ apartments }/>
                )
              }}
            />
          }

          { logged_in &&
            <Route
              path="/apartmentedit/:id"
              render={ (props) => {
                let id = props.match.params.id
                let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
                return (
                  <ApartmentEdit
                    updateApartment={ this.updateApartment }
                    current_user={ current_user }
                    apartment={ apartment }
                  />
                )
              }}
            />
          }

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

          <Route
            path="/notfound"
            render={ (props) => {
              return (
                <NotFound />
              )
            } }
          />

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
