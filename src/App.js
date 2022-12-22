import React ,{ useState } from 'react';
import MainHeader from './components/Layout/Header';
import Food from './components/Foods/Food';
import Cart from './components/cart/Cart'
import CartContextProvider from './components/store/CartContextProvider';


function App() {
  const [isCartView, setCartView] = useState(false);
  const showCartHandler = () => {
    setCartView(true);
  }
  const hideCartHandler = () => {
    setCartView(false);
  }
  return (
    <React.Fragment>
      <CartContextProvider>
        

      {isCartView && <Cart hideCartHandler={hideCartHandler} ></Cart>}
      <MainHeader showCartHandler={showCartHandler} />
      <main>
        <Food/>
      </main>
      </CartContextProvider>
    </React.Fragment>
  );
}

export default App;
