import React from "react"
import Card from "react-bootstrap/Card"
import FinalFantasy from './Final_Fantasy.gif'


function GitHubCard() {
    return (
        <div className="card">
          <Card style={{ width: "18rem"}}>
          {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
          <Card.Img variant="top" src={FinalFantasy} />
          {/* Source: https://en.wikipedia.org/wiki/Mickey_Mouse */}
          <Card.Body>
              <Card.Title>Code World</Card.Title>
              <Card.Text>
              I am an aspiring Software Engineer/Developer
              </Card.Text>
          </Card.Body>
          </Card>
        </div>
    );
  }
  
  export default GitHubCard