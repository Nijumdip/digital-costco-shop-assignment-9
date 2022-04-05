import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AllReviews = ({ review }) => {
    const { name, image, review1, ratting } = review;
    return (
        <Col>
        <Card className='text-center' style={{ height: "550px" }}>
            <div className=" text-center p-2 ">
                <img className="rounded" width="335px" height="300px" variant="top" src={image}/>
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

export default AllReviews;