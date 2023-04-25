import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { About } from "./View/About";
// import { Home } from "./View/Home";
// import { Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="App">
    <Container>
      <Navbar expand="lg" variant="light" bg="light" className="coco">
        <Container style={{ backgroundCcolor: "chocolate" }}>
          <Navbar.Brand href="/">Welcome to React Hooks Tutorial</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand href="/About">
              Implemented By: @ Soumya Jain
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>

    {/* <Home /> */}
    {/* <iframe 
    src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" 
    width="480" height="360" 
    frameBorder="0" class="giphy-embed" allowFullScreen>
    </iframe><p><a href="https://giphy.com/gifs/dommespace-domme-space-programador-qgQUggAC3Pfv687qPC">via GIPHY</a></p> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>

    {/* <ul>
  <li>
    <Link to="/">Welcome to React Hooks Tutorial</Link>
    </li>
  <li>
    <Link to="/About"> Implemented By: @ Soumya Jain</Link></li>
  </ul> */}
  </div>
);
