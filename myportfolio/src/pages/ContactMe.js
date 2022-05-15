import React, { Component } from 'react'
import email from '../img/email.png'
import linked from '../img/linked.png'
import github from '../img/github.png'


class Projects extends Component {
  render() {
    return (
      <>
        <div id="contact"></div>
        <div className="sectionheaders">Contact</div>
        <div className="contactsection">
          <div className="contacticons">
            <a className="emaillogo" target="_blank"
              href="mailto:jose.sison1@outlook.com">
              <img src={email} width="60" height="60/" />
              <p className="email">Email</p>
            </a>
            <a className="linkedlogo" target="_blank"
              href="https://www.linkedin.com/in/jose-sison/">
              <img src={linked} width="60" height="60" />
              <p className="linked">LinkedIn</p>

            </a>
            <a className="githublogo" target="_blank"
              href="https://github.com/josesison1">
              <img src={github} width="60" height="60" />
              <p className="git">GitHub</p>
            </a>
          </div>
        </div>
      </>
    )
  }
}

export default Projects