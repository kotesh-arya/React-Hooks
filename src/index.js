import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider, ThemeProvider, LocaliseProvider } from "./cart.context";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LocaliseProvider>
      <CartProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CartProvider>
    </LocaliseProvider>
  </StrictMode>,
  rootElement
);
