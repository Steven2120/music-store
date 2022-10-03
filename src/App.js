import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/pages/HomePage";
import SignInPage from "./components/pages/LoginPage";
import CustomThemeProvider from "./CustomThemeProvider";
import CartPage from "./components/pages/CartPage";
import UserContextProvider from "./contexts/userContext";
import ShoppingCartContextProvider from "./contexts/cartContext";
import "./App.css";

function App() {
  return (
    <CustomThemeProvider>
      <UserContextProvider>
        <ShoppingCartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user" element={<SignInPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </ShoppingCartContextProvider>
      </UserContextProvider>
    </CustomThemeProvider>
  );
}

export default App;
