import React from "react";
import { Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="d-flex m-5">
      <div className="w-75">
        <h1>Digital Costco Shop</h1>
        <h1>
          <span className="color">Make Sure Your Best Laptop </span>
        </h1>
        <p>
        THE BOTTOM LINE <br/>
        MSI's Katana GF66 is a well-priced, well-rounded budget gaming laptop that <br />
        cuts competing models down to size.
        <br />
        Base Configuration Price $799.00 <br />
        $1,206.74 at Amazon <br />
        $1,342.00 Save $135.26
        </p>
        <p><Button variant="outline-primary">Live Demo</Button></p>
      </div>
      <div>
        <img
          className="rounded"
          width={"450px"}
          height={"550px"}
          src="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
