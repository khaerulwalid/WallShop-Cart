import { createContext } from "react";
import { faker } from "@faker-js/faker";
import { useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { useContext } from "react";

const Cart = createContext();

export function CartContext() {
  return useContext(Cart);
}

export function Context({ children }) {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
    inStock: faker.helpers.arrayElements([0, 3, 5, 6, 7], 1),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElements([1, 2, 3, 4, 5], 1),
  }));

  //   console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={[state, dispatch]}>{children}</Cart.Provider>;
}
