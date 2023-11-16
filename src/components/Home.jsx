import React from "react";
import { CartContext } from "../context/context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";

export const Home = () => {
  const [state, dispatch] = CartContext();
  const { products } = state;

  console.log(products);

  return (
    <>
      <div className="home">
        <Filters />
        <div className="productContainer">
          {products.map((product) => {
            return <SingleProduct product={product} key={product.id} />;
          })}
        </div>
      </div>
    </>
  );
};
