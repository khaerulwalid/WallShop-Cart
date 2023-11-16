import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./context/context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Context>
        <BrowserRouter>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Context>
    </>
  );
}

export default App;
