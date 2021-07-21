import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "./util/apiURL.js";
import CategoryBanner from "./components/CategoryBanner.js";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import HomePage from "./components/HomePage.js";
import Bevs from "./components/Bevs";
import Snacks from "./components/Snacks";
import Sandwiches from "./components/Sandwiches";
import Misc from "./components/Misc";
import "./App.css";

const API = apiURL();

function App() {
  const [products, setProducts] = useEffect(() => {
    try {
      axios.get(`${API}/products`).then(
        (response) => {
          setProducts(response.data);
        },
        (error) => console.log("get", error)
      );
    } catch (error) {
      console.warn("catch", error);
    }
  }, []);

  return (
    <div className="app">
      <CategoryBanner />
      <Navbar />
      <Header />
      {/* we're gonna need a swtich here */}
      <Products products={products} />
      <HomePage />

      {/* <Route path="/products/bevs" component={Bevs} />
      <Route path="/products/snacks" component={Snacks} />
      <Route path="/products/sandwiches" component={Sandwiches} />
      <Route path="/products/misc" component={Misc} /> */}
    </div>
  );
}

export default App;
