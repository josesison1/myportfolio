import React, { Component } from 'react'
import js from '../img/javascript2.svg'
import ruby from '../img/ruby2.png'
import htmlcss from '../img/htmlcss.png'
import csharp from '../img/csharp.png'
import java from '../img/java.png'
import react from '../img/react.png'
import rails from '../img/rails.png'
import sqlserver from '../img/sqlserver.svg'
import postgres from '../img/pngegg.png'

class Skills extends Component {
  render() {
    return (
      <>
        <div id="skills"></div>
        <br />
        <div className="skills">
          <div className="sectionheaders">Skills</div>
          <div className="skillssection">
            <div className="skills1">
              <img src={js} width="200" height="170" />
              <img src={ruby} width="165" height="160" />
              <img src={htmlcss} width="185" height="180" />
            </div>
            <div className="skills2">
              <img src={csharp} width="190" height="180" />
              <img src={java} width="190" height="180" />
              <img src={react} width="195" height="180" />
            </div>
            <div className="skills3">
              <img src={rails} width="200" height="230" />
              <img src={sqlserver} width="200" height="180" />
              <img src={postgres} width="200" height="200" />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Skills