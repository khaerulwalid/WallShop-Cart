import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/context";

function SingleProduct({ product }) {
  const {
    state: { cart },
    dispatch,
  } = CartContext();
  console.log(cart);

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>$ {product.price}</span>
            {product.fastDelivery ? <div>Fast Delivery</div> : <div>4 days delivery</div>}
            <Rating rating={product.ratings} />
            <div>Stock : {product.inStock}</div>
            {cart.some((val) => val.id === product.id) ? (
              <div>
                <Button
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: product,
                    });
                  }}
                  variant="danger"
                >
                  Remove from cart
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: product,
                    });
                  }}
                  disabled={!(product.inStock > 0)}
                >
                  {product.inStock > 0 ? "Add to stock" : "Out of stock"}
                </Button>
              </div>
            )}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleProduct;
