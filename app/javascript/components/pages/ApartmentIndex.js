import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ApartmentIndex extends Component{
  render(){
    console.log(this.props.apartments)
    return(
      <React.Fragment>
        <h3 style={{ color: "black", textShadow: "1px 1px 1px black", fontSize: "28px" }}>Apartment Index</h3>

        <div id="index-body">
          { this.props.apartments.map((apartment, index) => {
            return(
              <div key={ index } className="index-card">
                <h3>{ apartment.street }</h3>
                <h3>{ apartment.city }</h3>
                <h3>{ apartment.state }</h3>
                <br />
                <Link to={`/apartmentshow/${apartment.id}`} className="button">
                  More Info
                </Link>
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}
export default ApartmentIndex
