import React, { Component } from 'react'
import process_image from '../assets/422error.png'

class CannotProcess extends Component{
  render(){
    return(
      <React.Fragment>
      <div id="notfound">
        <img style={{ height: "350px", width: "500px", margin: "100px" }}src={ process_image } alt="422 cannot process image" />
      </div>
      </React.Fragment>
    )
  }
}
export default CannotProcess
