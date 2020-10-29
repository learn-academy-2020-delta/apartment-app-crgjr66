import React, { Component } from 'react'
import server_image from '../assets/500error.jpeg'

class InternalServer extends Component{
  render(){
    return(
      <React.Fragment>
      <div id="notfound">
        <img style={{ height: "300px", width: "350px", margin: "100px" }}src={ server_image } alt="500 internal server image" />
      </div>
      </React.Fragment>
    )
  }
}
export default InternalServer
