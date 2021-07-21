import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "./util/apiURL.js";
import CategoryBanner from "./components/CategoryBanner.js";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import HomePage from "./components/HomePage.js";
import Products from './components/Products.js'
import Bevs from "./components/Bevs";
import Snacks from "./components/Snacks";
import Sandwiches from "./components/Sandwiches";
import Misc from "./components/Misc";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";

const API = apiURL();

function App() {
  const [products, setProducts] = useState({})
    useEffect(() => {
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
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>©
        <Route path='/products'>
          <Products products={products} />
        </Route>
        <Route path="/products/bevs" component={Bevs} />
        <Route path="/products/snacks" component={Snacks} />
        <Route path="/products/sandwiches" component={Sandwiches} />
        <Route path="/products/misc" component={Misc} />
      </Switch>
    </div>
  );
}

export default App;
