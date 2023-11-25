import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CartProvider } from "./contexts/CartContext";

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
