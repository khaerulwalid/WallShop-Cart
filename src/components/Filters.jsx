import React from "react";
import { Form } from "react-bootstrap";

function Filters() {
  return (
    <div className="filters">
      <span className="title">Filter Product</span>
      <span>
        <Form.Check inline label="Ascending" name="group1" type="radio" id={`inline-1`} />
      </span>
      <span>
        <Form.Check inline label="Descending" name="group1" type="radio" id={`inline-2`} />
      </span>
      <span>
        <Form.Check inline label="Include out of stock" name="group1" type="checkbox" id={`inline-3`} />
      </span>
      <span>
        <Form.Check inline label="Fast Delivery Only" name="group1" type="checkbox" id={`inline-4`} />
      </span>
      {/* <span>
        <label style={{ paddingRight: 10 }}>Rating</label>
        <Rating rating={byRating} />
      </span> */}
      <button variant="light">Clear Filter</button>
    </div>
  );
}

export default Filters;
