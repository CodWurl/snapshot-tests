//import logo from './logo.svg';
import './App.css'
import GitHubCard from './GitHubCard/GitHubCard.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function App() {
  return (
    <div className="App" >
      <Row>
        <Col style={{display: 'flex', justifyContent: 'center'}}>
          <GitHubCard />
        </Col>
      </Row>
    </div>
  )
}

export default App


