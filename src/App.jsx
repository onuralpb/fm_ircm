import { useState, useEffect } from "react";
import "./modules/libs";
import Image from "./modules/images";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import WaitFor from "./modules/waitFor";
import Loader from "./modules/Loader";
import { ResultText } from "./components/ResultText";

const App = () => {
  const [selectedPoint, setSelectedPoint] = useState(0);
  const [voteStatus, setVoteStatus] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(true);
  let voiting = 0;
  const points = [1, 2, 3, 4, 5];
  useEffect(() => {
    let isDataLoading = true;

    if (isDataLoading) {
      WaitFor(2000).then(() => setIsDataLoading(false));
    }

    return () => {
      isDataLoading = false;
    };
  }, [voteStatus]);

  return (
    <Container className="position-fixed top-50 start-50 translate-middle">
      <Row>
        <Col className="d-flex justify-content-center">
          {!voteStatus ? (
            <div className="appContent">
              {isDataLoading ? (
                <Loader />
              ) : (
                <>
                  <span className="d-flex justify-content-center align-items-center shadow-lg">
                    <img src={Image.StarIcon} alt="Star Icon" />
                  </span>
                  <h1>How did we do?</h1>

                  <p>
                    Please us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering?
                  </p>

                  <ul className="list-unstyled d-flex justify-content-between align-items-center flex-wrap buttonList">
                    {points.map((i) => {
                      return (
                        <li key={i}>
                          <a href="#" onClick={() => setSelectedPoint(i)}>
                            {i}
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="d-grid">
                    <Button
                      variant="primary"
                      size="lg"
                      className="btn-orange btnSubmit"
                      onClick={() => {
                        setVoteStatus(true);
                        voiting = 1;
                      }}
                    >
                      SUBMIT
                    </Button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="appContent resultPanel text-center">
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={() => setVoteStatus(false)}
              />
              <img src={Image.ThankyouImg} alt="Thank You" className="mb-4" />
              <ResultText
                selectedPoint={selectedPoint}
                voteStatus={voteStatus}
                voiting={voiting}
                points={points}
              />
            </div>
          )}
        </Col>
      </Row>
      <footer>
        <div className="attribution text-center">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>{" "}
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/onuralpb">
            Onur Alp Baklaci
          </a>
          .
        </div>
      </footer>
    </Container>
  );
};

export default App;
