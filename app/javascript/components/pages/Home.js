import React, { Component } from 'react'
import my_image from '../assets/apt_bldg.jpg'

class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <div id="home">
          <p id="home-title">Find your next home.</p>
          <img src={ my_image } alt="apartment image" />
        </div>
      </React.Fragment>
    )
  }
}
export default Home
