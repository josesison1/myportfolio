import React, { Component } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import github from '../img/github.png'
import linkedin from '../img/linked.png'
import logo from '../img/jslogo.png'

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <>
        <div>
          <Navbar light expand="md" fixed="top">
            <img src={logo} width='40' />
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className='navnavlink' href="#home" >Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='navnavlink' href="#about">About Me</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='navnavlink' href="#skills">Skills</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='navnavlink' href="#projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='navnavlink' href="#contact">Contact Me</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='navgithub'
                    href="https://github.com/josesison1/"
                    target="_blank">
                    <img src={github} width='35' />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='navlinkedin'
                    href="https://www.linkedin.com/in/jose-sison/"
                    target="_blank">
                    <img src={linkedin} width='35' />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </>
    )
  }
}

export default Header;