import { useEffect, useRef } from "react";
import WaitFor from "../modules/waitFor";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { addAnimatePro, addAnimateProFade } from "../modules/animate";

export const ResultText = ({ selectedPoint, voteStatus, voiting, points }) => {
  const animOne = useRef(null);
  const animTwo = useRef(null);
  const animThree = useRef(null);
  useEffect(() => {
    WaitFor(100).then(() => addAnimatePro(animOne.current, "jello", "normal"));
    WaitFor(500).then(() => addAnimatePro(animTwo.current, "tada", "normal"));
    WaitFor(900).then(() =>
      addAnimateProFade(animThree.current, "flipInX", "normal")
    );
  }, []);
  return (
    <>
      <Row
        ref={animOne}
        className="resultSpotContent justify-content-center text-center row-cols-auto"
      >
        <Col className="resultSpotTxt">
          You Selected {selectedPoint} out of {points.length}
        </Col>
      </Row>
      <h1 ref={animTwo}>Thank You!</h1>
      <p ref={animThree}>
        We appreciate youtaking the time to give a rating. If you ever need more
        support, don't hesitate to get in touch
      </p>
    </>
  );
};
