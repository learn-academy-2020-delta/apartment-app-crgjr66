import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Footer extends Component {
    render() {
      const {
        logged_in,
        sign_in_route,
        sign_up_route,
        sign_out_route,
        current_user
      } = this.props
      return (
          <>
              <div id="footer">
                  <Nav style={{ display: "flex", justifyContent: "left" }} className="nav">
                      <NavItem>
                          <NavLink style={{ color: "black", textShadow: "1px 1px 1px black", fontSize: "18px" }} href="/">Home</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink style={{ color: "black", textShadow: "1px 1px 1px black", fontSize: "18px" }} href="/apartmentindex">All the Apartments</NavLink>
                      </NavItem>
                      { logged_in &&
                        <NavItem>
                            <a style={{ color: "black", textShadow: "1px 1px 1px black", fontSize: "18px" }} href={ sign_out_route }>Sign Out</a>
                        </NavItem>
                      }
                      { !logged_in &&
                        <>
                          <NavItem>
                              <a style={{ color: "black", textShadow: "1px 1px 1px black", fontSize: "18px" }} href={ sign_in_route }>Sign In</a>
                          </NavItem>
                          <NavItem>
                              <a style={{ color: "black", textShadow: "1px 1px 1px black", fontSize: "18px" }} href={ sign_up_route }>Sign Up</a>
                          </NavItem>
                        </>
                      }
                  </Nav>
              </div>
          </>
      )
    }
}

export default Footer
