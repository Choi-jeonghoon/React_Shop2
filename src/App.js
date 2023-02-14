import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import img2 from "./img/img1.jpg";
import { Navbar, Container, Nav, Row } from "react-bootstrap/";
import { useState } from "react";
import CardCompont from "./components/CardCompont";

function App({ data }) {
  const [shoes] = useState(data);

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
          {shoes.map((item) => (
            <CardCompont item={item} key={item.id}></CardCompont>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
