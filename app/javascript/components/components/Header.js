import React, { Component } from 'react'

class Header extends Component{
  render(){
    return(
      <React.Fragment>
        <div id="header">
          <h3 style={{ color: "black", textShadow: "1px 1px 1px black", fontSize: "28px" }}>My Apartment Application</h3>
        </div>
      </React.Fragment>
    )
  }
}
export default Header
