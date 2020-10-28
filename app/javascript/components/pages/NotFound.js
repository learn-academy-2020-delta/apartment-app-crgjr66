import React, { Component } from 'react'
import oops_image from '../assets/404error.jpeg'

class NotFound extends Component{
  render(){
    return(
      <React.Fragment>
      <div id="notfound">
        <img style={{ height: "350px", width: "350px", margin: "100px" }}src={ oops_image } alt="404 not found image" />
      </div>
      </React.Fragment>
    )
  }
}
export default NotFound
