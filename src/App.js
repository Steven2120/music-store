import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import CustomThemeProvider from "./CustomThemeProvider";
import CartPage from "./components/pages/CartPage";
import LoginPage from "./components/pages/LoginPage";
function App() {
  const [user, setUser] = useState();
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                user={user}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            }
          />
          <Route
            path="/sign-in"
            element={<LoginPage user={user} setUser={setUser} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                user={user}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
