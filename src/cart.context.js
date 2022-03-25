import { useContext, createContext, useState } from "react";

const CartContext = createContext({ items: 2 });
const ThemeContext = createContext({
  color: "white",
  backgroundColor: "black"
});
const LocaliseContext = createContext({ title: "Product List" });
const CartProvider = ({ children }) => {
  const [items, setItems] = useState(5);
  const addToCart = () => {
    setItems((prevItem) => prevItem + 1);
  };
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const ThemeProvider = ({ children }) => {
  const themeHandler = () => {
    setTheme((prevTheme) =>
      prevTheme.color === "black"
        ? { color: "white", backgroundColor: "black" }
        : { color: "black", backgroundColor: "white" }
    );
  };
  const lightTheme = {
    color: "black",
    backgroundColor: "white"
  };
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeContext.Provider value={{ theme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};
const LocaliseProvider = ({ children }) => {
  const languageHandler = () => {
    setLanguage((prevLanguage) => {
      return prevLanguage.title === "Product List"
        ? { title: "ఉత్పత్తి జాబితా" }
        : { title: "Product List" };
    });
  };
  const englishText = {
    title: "Product List"
  };
  const [language, setLanguage] = useState(englishText);
  return (
    <LocaliseContext.Provider value={{ language, languageHandler }}>
      {children}
    </LocaliseContext.Provider>
  );
};
const useLanguage = () => useContext(LocaliseContext);
const useTheme = () => useContext(ThemeContext);
const useCart = () => useContext(CartContext);
export {
  useLanguage,
  useTheme,
  useCart,
  CartProvider,
  ThemeProvider,
  LocaliseProvider
};
