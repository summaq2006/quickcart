function Cart({ cart, setCart, setCartOpen }) {
  const increaseQty = (id) => {

  setCart(
    cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );

  };

  const decreaseQty = (id) => {

  setCart(
    cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );

  };



  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-sidebar">

      <button onClick={() => setCartOpen(false)}>
        Close
      </button>

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
        <div key={item.id} className="cart-item">

        <img src={item.image} alt={item.name} width="80" />

        <p>Price: ₹{item.price * item.quantity}</p>

        <h4>{item.name}</h4>

        <div>

        <button onClick={() => decreaseQty(item.id)}>
          -
        </button>

        <span> {item.quantity} </span>

        <button onClick={() => increaseQty(item.id)}>
         +
        </button>

        </div>

        <p>Price: ₹{item.price * item.quantity}</p>

        <button onClick={() => removeItem(item.id)}>
        Remove
        </button>

        </div>
         ))
      )}

      <h3>Total: ₹{totalPrice}</h3>

    </div>
  );
}

export default Cart;