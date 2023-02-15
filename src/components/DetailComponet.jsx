import React from "react";
import { Card, Button } from "react-bootstrap/";

const DetailComponet = () => {
  return (
    <div
      style={{
        width: "80%",
        marginTop: "5%",
        marginBottom: "5%",
        paddingLeft: "20%",
      }}
    >
      <Card className="text-center">
        <Card.Img src="https://codingapple1.github.io/shop/shoes1.jpg" />
        <Card.Body>
          <Card.Title>상품명</Card.Title>
          <Card.Text>브랜드</Card.Text>
          <Card.Text>설명</Card.Text>
          <Card.Text>가격</Card.Text>
        </Card.Body>
        <Button>주문하기</Button>
      </Card>
    </div>
  );
};

export default DetailComponet;
