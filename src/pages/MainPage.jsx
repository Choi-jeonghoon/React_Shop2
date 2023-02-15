import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap/";
import { useState } from "react";
import CardCompont from "../components/CardCompont";
import NavBar from "../common/NavBar";
import { data } from "../data/dataInfo";

function MainPage() {
  const [shoes] = useState(data);
  return (
    <div className="App">
      <NavBar />
      <div className="main-bg" />
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

export default MainPage;
