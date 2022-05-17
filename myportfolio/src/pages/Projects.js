import React, { Component } from 'react'
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, CardGroup, CardImg
} from 'reactstrap';
import pokemon from '../img/pokemon.png'
import onclick from '../img/onclick.png'
import project from '../img/project.png'
import rentnow from '../img/rentnow.png'
import smashball from '../img/smashball.png'
import aptapp from '../img/aptapp.png'


class Projects extends Component {
  render() {
    return (
      <>
        <div id="projects"></div>
        <div className="sectionheaders">Projects</div>
        <div className="card1">
          <Card>
            <img src={pokemon} id='projectimg' />
            <CardBody>
              <CardTitle>Jose's Pokemon</CardTitle>
              <CardSubtitle>
                Technologies used: API | JavaScript | html | css
              </CardSubtitle>
            </CardBody>
            <CardBody>
              <CardText>
                PoKedex is a built application utilizing an external API. A side project that I did just to get hands-on practice with using API's and iterating through and filtering specific data that can be viewed and displayed.
              </CardText>
              <p className='moreinfo'>For more info, click the following links below:</p>
              <CardLink href='https://josesison1.github.io/myPoKedex/'
                target='_blank'>Live link to app
              </CardLink>
              <CardLink href='https://github.com/josesison1/myPoKedex'
                target='_blank'>Source Code
              </CardLink>
            </CardBody>
          </Card>
          <Card>
            <img src={onclick} id="projectimg" />
            <CardBody>
              <CardTitle> onClick() </CardTitle>
              <CardSubtitle>Technologies used: React | Ruby on Rails | Ruby | JavaScript | Reactstrap | Scss | Jest | RSpec | Enzyme
              </CardSubtitle>
            </CardBody>
            <CardBody>
              <CardText>onClick() is a React in Rails full stack application that I was apart of during a 2-week capstone project while at LEARN Academy. It's essentially a networking application that show cases basic CRUD functionality.</CardText>
              <p className="moreinfo">For more info, click the following links below:</p>
              <CardLink
                href="https://whispering-cliffs-33805.herokuapp.com/" target="_blank">Live link to app
              </CardLink>
              <CardLink
                href="https://github.com/codemonkeys938/onClick"
                target="_blank">Source Code
              </CardLink>
            </CardBody>
          </Card>
          <Card>
            <img src={project} id="projectimg" />
            <CardBody>
              <CardTitle>MJ Treasure Hunt</CardTitle>
              <CardSubtitle>Technologies used: JavaScript | html | css
              </CardSubtitle>
            </CardBody>
            <CardBody>
              <CardText>A basic web application built during Jumpstart which is a 3-day course that goes over the basics and fundamentals of development. The application contains a small treasure hunt board game, 3x3 table that is created using HTML and functionality using JavaScript.</CardText>
              <p className="moreinfo">For more info, click the following links below:</p>
              <CardLink
                href="https://josesison1.github.io/MJ-Treasure-Hunt/"
                target="_blank" >Link to application
              </CardLink>
              <CardLink href="https://github.com/josesison1/MJ-Treasure-Hunt" target="_blank">Source Code
              </CardLink>
            </CardBody>
          </Card>
          <Card>
            <img src={smashball} id="projectimg" />
            <CardBody>
              <CardTitle>Smashball</CardTitle>
              <CardSubtitle>Technologies used: React | Ruby on Rails | JavaScript | Ruby | html | css | Enzyme | Jest | RSpec
              </CardSubtitle>
            </CardBody>
            <CardBody>
              <CardText>Smashball is an full stack application built using React for the front end and Rails for the back end. This project is to display basic CRUD functionality with the utilization of an API fetching data from the local host and being able to see it on the front end.
              </CardText>
              <p className="moreinfo">For more info, click the following links below:</p>
              <CardLink target="_blank" href="https://github.com/josesison1/frontend-smashball">Frontend source</CardLink>
              <CardLink target="_blank" href="https://github.com/josesison1/backend-smashball">Backend source</CardLink>
            </CardBody>
          </Card>
          <Card>
            <img src={rentnow} id="projectimg" />
            <CardBody>
              <CardTitle>RentNow</CardTitle>
              <CardSubtitle>Technologies used: c# | sql | asp.net | html | css
              </CardSubtitle>
            </CardBody>
            <CardBody>
              <CardText>A project built using ASP.NET MVC to display basic CRUD functionality and with the use of a database to store data from the user. Show casing wireframes & prototypes created through figma, database relationships, user stories, use case diagram, and test cases.
                <br /><br />*WORK IN PROGRESS*</CardText>
              <p className="moreinfo">For more info, click the following links below:</p>
              <CardLink target="blank" href="https://github.com/josesison1/RentNowApp"> Source Code</CardLink>
            </CardBody>
          </Card>
        </div >
      </>
    )
  }
}

export default Projects