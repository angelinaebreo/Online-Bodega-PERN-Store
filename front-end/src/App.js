import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "./util/apiURL.js";
import CategoryBanner from "./components/CategoryBanner.js";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import HomePage from "./components/HomePage.js";
import "./App.css"

const API = apiURL();

function App() {
  //yesii

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
  //yo yo
  
  return (
    <div className="app">
      <CategoryBanner />
      <span id="nav-container">
      <Navbar />
      <Header />
      </span>
      <HomePage />
      {/* <ul>
        {days.map((day) => (
          <li key={day.name}>{day.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
