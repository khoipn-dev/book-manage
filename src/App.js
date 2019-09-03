import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/Navbar/Navbar";
import InputScreen from "./containers/InputScreen/InputScreen";
import HomeScreen from "./containers/HomeScreen/HomeScreen";
import BookDetailScreen from "./containers/BookDetailScreen/BookDetailScreen";
import CartScreen from "./containers/CartScreen/CartScreen";
import "./App.css";
import { CartProvider } from "./contexts/CartContext";

function App() {
  
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <NavBar />     
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/books" component={HomeScreen} />
          <Route exact path="/books/add-new-book" component={InputScreen} />
          <Route exact path="/books/:slug.:id" component={BookDetailScreen} />
          <Route exact path="/cart" component={CartScreen} /> 
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
