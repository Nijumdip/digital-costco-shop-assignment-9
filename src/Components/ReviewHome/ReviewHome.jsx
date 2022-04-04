import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReviewHome = ({ review }) => {
  const { name, image, review1, ratting } = review;
  return (
    <Col>
        <Card style={{ height: "550px" }}>
            <div className=" text-center p-3">
                <img className="rounded" width="300px" height="300px" variant="top" src={image}/>
            </div>
            <Card.Body>
                <h4>{name} </h4>
                <p>{review1}</p>
                <p>Rating : {ratting} </p>
            </Card.Body>
        </Card>
    </Col>
  );
};

export default ReviewHome;
