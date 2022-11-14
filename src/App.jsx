import "./modules/libs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container className="pageContainer text-center">
      <Row className="appLayout justify-content-center align-items-center">
        <Col className="d-flex justify-content-center align-items-center">
          <Row className="appContainer">
            <Col>
              <Row className="appContent justify-content-center row-cols-auto align-items-center">
                <Col>1 of 3</Col>
                <Col>Variable width content</Col>
                <Col>3 of 3</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
