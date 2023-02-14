import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import img2 from "./img/img1.jpg";
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap/";
import { data } from "./data/dataInfo";
import { useState } from "react";

function App() {
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
          {shoes.map((data) => (
            // <Col key={data.id}>
            //   <img
            //     src="https://codingapple1.github.io/shop/shoes2.jpg"
            //     style={{ width: "100%" }}
            //   />
            //   <h4>{data.title}</h4>
            //   <p>{data.content}</p>
            //   <p>{data.price}</p>
            // </Col>
            <Card key={data.id} style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://codingapple1.github.io/shop/shoes2.jpg"
              />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.content}</Card.Text>
                <Card.Text>{data.price}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
