import Card from "react-bootstrap/Card"
import Card from "react-bootstrap/Card"


function GitHubCard() {
    return (
        <div className="card">
          <Card style={{ width: "18rem"}}>
          {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
          <Card.Img variant="top" src={MickeyMouse} />
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