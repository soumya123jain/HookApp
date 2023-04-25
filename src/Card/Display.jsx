import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import content from "./Discription";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import codeSnippet from "../Components/useId/Email";
import Email from "../Components/useId/Email";
import * as Constants from "./snippet";
import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import * as codeexample from "./codeExample";
import { codeExample } from "./codeExample";

export const Display = (props) => {
  const [show, setShow] = useState(false);

  // useEffect(()=>{console.log("effect")}
  // return ()=>{
  //   setShow(false);
  // })

  console.log("Diplay");
  console.log(props.value);
  console.log(content);

  let output = content.filter((item) => item["Hook"] == props.value);
  console.log(output);
  let url = output[0]?.url;
  const codeString = Constants[props.value];
  const codeExplain = codeexample[props.value];
  console.log("explain");
  console.log(codeExplain);

  return (
    <>
      <Container>
        {props?.value?.length > 0 ? (
          <Row>
            <Col>
              <Card>
                <Card.Header>{props.value}</Card.Header>
                <Card.Body>
                  <Card.Title>Discription</Card.Title>
                  <Card.Text>{output[0]?.Discription}</Card.Text>
                  <Card.Title>Code Snippet</Card.Title>
                  <Card.Text>{codeExplain}</Card.Text>
                  <Card.Text>
                    <SyntaxHighlighter language="jsx" style={dark}>
                      {codeString}
                    </SyntaxHighlighter>
                  </Card.Text>
                  <Button variant="primary" onChange={() => setShow(true)}>
                    Demo
                  </Button>
                  <code></code>
                </Card.Body>

                <iframe
                  src={url}
                  style={{ width: "100%", height: "500px" }}
                  title="unruffled-perlman-iqtdyk"
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
              </Card>
            </Col>
          </Row>
        ) : (
          <div className="animation">
            <iframe src="https://embed.lottiefiles.com/animation/79960"></iframe>
          </div>
        )}
      </Container>
    </>
  );
};
