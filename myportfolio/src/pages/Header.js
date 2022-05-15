import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <div className='landingimg' id='home'>
          <div className="welcomesign">
            <div className='welcome'>WELCOME</div>
            <div className='tomy'>TO MY</div>
            <div className='portfolio'>PORTFOLIO</div>
          </div>
        </div>
      </>
    )
  }
}

export default Header;