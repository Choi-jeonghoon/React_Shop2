import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import img2 from "./img/img1.jpg";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap/";
import { data } from "./data/dataInfo";
import { useState } from "react";

function App() {
  const [shoes] = useState(data);
  console.log(shoes[0]);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Brand</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className="main-bg"
        // style={{ backgroundImage: "url(" + img2 + ")" }}
      ></div>
      <Container>
        <Row>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/logo192.png"}
              style={{ width: "100px" }}
            />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              style={{ width: "100px" }}
            />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              style={{ width: "100px" }}
            />
            <h4>{shoes[3].title}</h4>
            <p>{shoes[3].price}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
