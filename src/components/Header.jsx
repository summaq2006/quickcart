function Header({ cart = [], setCartOpen }) {

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header>
      <h1>QuickCart</h1>

      <button onClick={() => setCartOpen(true)}>
        Cart ({totalItems})
      </button>
    </header>
  );
}

export default Header;