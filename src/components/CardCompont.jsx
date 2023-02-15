import { Card } from "react-bootstrap/";

function CardCompont({ item }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`}
      />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.content}</Card.Text>
        <Card.Text>{item.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardCompont;
