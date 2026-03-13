import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import products from "./data/products";
import "./styles/product.css";
import Cart from "./components/Cart";

function App() {

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

    } else {

      setCart([...cart, { ...product, quantity: 1 }]);

    }
  };

  return (
    <div>

      <Header cart={cart} setCartOpen={setCartOpen} />

      <ProductList
        products={products}
        addToCart={addToCart}
      />

      {cartOpen && (
         <Cart
          cart={cart}
          setCart={setCart}
          setCartOpen={setCartOpen}
       />
       )}

  </div>
  );
}

export default App;
