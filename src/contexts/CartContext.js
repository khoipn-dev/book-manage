import React, { useState, useEffect } from "react";

export const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    function getCart() {
      const localStorageData = localStorage.getItem("cart");
      if (localStorageData === null) {
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        setCart(JSON.parse(localStorageData));
      }
    };
    getCart();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = book => {
    let indexOfBook = exists(book);

    if (indexOfBook === -1) {
      setCart(cart.concat([{ ...book, quantity: 1 }]));
    } else {
      let temp = cart;
      temp[indexOfBook] = {
        ...temp[indexOfBook],
        quantity: temp[indexOfBook].quantity + 1
      };
      localStorage.setItem("cart", JSON.stringify(temp));
      setCart(temp);
    }
  };

  const exists = book => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === book.id) return i;
    }
    return -1;
  };
  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addToCart: addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
