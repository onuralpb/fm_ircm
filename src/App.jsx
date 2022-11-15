import { useState, useEffect } from "react";
import "./modules/libs";
import Image from "./modules/images";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function App() {
  const [selectedPoint, setSelectedPoint] = useState(0);
  const [voteStatus, setVoteStatus] = useState(false);
  console.log("voteStatus: ", voteStatus);
  const points = [1, 2, 3, 4, 5];

  return (
    <Container className="pageContainer">
      <Row className="appLayout">
        <Col className="d-flex justify-content-center align-items-center">
          <Row className="appContainer shadow-lg">
            <Col>
              <Row>
                {!voteStatus ? (
                  <Col className="appContent">
                    <span className="d-flex justify-content-center align-items-center">
                      <img src={Image.StarIcon} alt="Star Icon" />
                    </span>
                    <h1>How did we do? {selectedPoint}</h1>
                    <p>
                      Please let us know how we did with your support request.
                      All feedback is appreciated to help us improve our
                      offering?
                    </p>
                    <Row className="d-flex justify-content-around align-items-center text-center buttonList gx-1">
                      {points.map((i) => {
                        return (
                          <Col key={i}>
                            <a href="#" onClick={() => setSelectedPoint(i)}>
                              {i}
                            </a>
                          </Col>
                        );
                      })}
                    </Row>
                    <div className="d-grid gap-2">
                      <Button
                        variant="primary"
                        size="lg"
                        className="btn-orange btnSubmit"
                        onClick={() => setVoteStatus(true)}
                      >
                        SUBMIT
                      </Button>
                    </div>
                  </Col>
                ) : (
                  <Col className="appContent text-center">
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      aria-label="Close"
                      onClick={() => setVoteStatus(false)}
                    />
                    <img
                      src={Image.ThankyouImg}
                      alt="Thank You"
                      className="mb-4"
                    />
                    <p>
                      You Selected {selectedPoint} out of {points.length}
                    </p>
                    <h1>Thank You!</h1>
                    <p>
                      We appreciate youtaking the time to give a rating. If you
                      ever need more support, don't hesitate to get in touch
                    </p>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
