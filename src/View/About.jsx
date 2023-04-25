import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export const About = () => {
  return (
    <>
      <Container className="about">
        <Card className="mb-2">
          <Card.Header>About Me</Card.Header>
          <Card.Body>
            <div className="box">
              <div className="avatar">
                <iframe src="https://embed.lottiefiles.com/animation/42722"></iframe>
              </div>
              <div className="intro">
                <p>Hi, I am Soumya Jain,</p>I am a frontend Developer.
                <p>
                  This application has been developed to have a better
                  understading of the React Hooks.
                </p>
                <p>So Readyyyy to exploreee........</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
