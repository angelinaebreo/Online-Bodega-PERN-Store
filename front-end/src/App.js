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
import Misc from "./components/Misc"
import "./App.css"

const API = apiURL();

function App() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/test`)
      .then(
        (response) => setDays(response.data),
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);
  
  return (
    <div className="app">
      <CategoryBanner />
      <Navbar />
      <Header />
      <HomePage />


      {/* <Route path="/products/bevs" component={Bevs} />
      <Route path="/products/snacks" component={Snacks} />
      <Route path="/products/sandwiches" component={Sandwiches} />
      <Route path="/products/misc" component={Misc} /> */}
    </div>
  );
}

export default App;
