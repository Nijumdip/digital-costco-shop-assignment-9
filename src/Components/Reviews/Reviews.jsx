import React from "react";
import { Row } from "react-bootstrap";
import useReviews from "../../hooks/useReviews";
import AllReviews from "../AllReviews/AllReviews";

const Reviews = () => {
  const [reviews] = useReviews([]);
    return (
      <div className=" container d-flex flex-row justify-content-center align-items-start">
      <Row xs={1} md={3} className="g-4">
        {reviews.map(review => <AllReviews 
            key={review.id}
            review={review}
        ></AllReviews>
        )}
      </Row>
            
      </div>
  );
};

export default Reviews;
