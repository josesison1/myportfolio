import React, { Component } from 'react'
import aboutmepic from '../img/mypic.jpeg'
import laptop from '../img/computer3.png'
import download from '../img/download.png'
import resume from '../assets/Jose Sison Full Stack Developer Resume.pdf'


class AboutMe extends Component {
  render() {
    return (
      <>
        <div id="about"></div>
        <div className="sectionheaders">About Me</div>
        <div className="aboutme">
          <div className="aboutme1"><img id="myimage" src={aboutmepic} width="350" />
            <p className="myname">Jose Sison</p>
            <p className="sandiego">San Diego, CA.</p>
          </div>
          <div className="aboutmyself">
            <div className="hello">
              <img className="laptoppic" src={laptop} width="400" />
              <p id="aboutmeparagraph">Hello! I'm a full stack developer with experience in various programming languages and frameworks. Eager to hone
                technical expertise and fulfill my passion for building efficient and functional web applications. I enjoy problem
                solving, learning new technologies, and finding ways to utilize my skills to solve real world problems through
                code.</p>
              <a className="resume" href={resume} target="_blank">Download Resume <img src={download} width="22" /> </a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AboutMe