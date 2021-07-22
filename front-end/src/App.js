import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { apiURL } from "./util/apiURL.js";
import CategoryBanner from "./components/CategoryBanner.js";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import HomePage from "./components/HomePage.js";
import Products from "./components/Products.js";
import Bevs from "./components/Bevs";
import Snacks from "./components/Snacks";
import Sandwiches from "./components/Sandwiches";
import Misc from "./components/Misc";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NewProduct from "./components/NewProduct.js";
import ProductView from "./components/ProductView.js";
import EditForm from "./components/EditForm.js";
import Reviews from "./components/Reviews.js";

const API = apiURL();

function App() {
  let history = useHistory();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      axios.get(`${API}/products`).then(
        (response) => {
          setProducts(response.data.payload);
        },
        (error) => console.log("get", error)
      );
    } catch (error) {
      console.warn("catch", error);
    }
  }, []);

  const deleteProduct = (id) => {
    try {
      axios.delete(`${API}/products/${id}`).then((response) => {
        const foo = [...products];
        foo.splice(
          products.findIndex((product) => product.id === Number(id)),
          1
        );
        setProducts(foo);
        history.push("/products");
      });
    } catch (error) {
      console.warn("catch", error);
    }
  };

  const addProduct = (product) => {
    try {
      axios.post(`${API}/products`, product).then((response) => {
        // let array = [...products, product];
        // let sort = array.sort((a, b) => {
        //   let a2 = a.name.toLowerCase();
        //   let b2 = b.name.toLowerCase;

        //   if (a2 < b2) {
        //     return -1;
        //   }
        //   if (a2 > b2) {
        //     return 1;
        //   }
        //   return 0;
        // });

        // setProducts(sort);
        updateState()
        history.push("/products");
      });
    } catch (error) {
      console.warn("catch", error);
    }
  };

  const updateProduct = (product, id) => {
    try {
      axios.put(`${API}/products/${id}`, product).then((response) => {
        const neuVar = [...products];
        const index = neuVar.findIndex((product) => product.id === Number(id));

        console.log(index, neuVar);
        neuVar[index] = product;

        setProducts(neuVar);
        history.push(`/products/${id}`);
      });
    } catch (error) {
      console.warn("catch", error);
    }
  };

  const updateState = () => {
    try {
      axios.get(`${API}/products`).then(
        (response) => {
          setProducts(response.data.payload);
        },
        (error) => console.log("get", error)
      );
    } catch (error) {
      console.warn("catch", error);
    }
  }

  return (
    <div className="app">
      <CategoryBanner />
      <Navbar />
      <Header />

      <div id="body">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/products/bevs">
            <Bevs products={products} />
          </Route>
          <Route path="/products/snacks">
            <Snacks products={products} />
          </Route>
          <Route path="/products/sandwiches">
            <Sandwiches products={products} />
          </Route>
          <Route path="/products/misc">
            <Misc products={products} />
          </Route>
          <Route exact path="/products/:id">
            <ProductView deleteProduct={deleteProduct} />
          </Route>
          <Route path="/products/:id/edit">
            <EditForm updateProduct={updateProduct} />
          </Route>
          <Route path="/products/:id/reviews">
            <Reviews />
          </Route>
          <Route exact path="/products">
            <Products products={products} />
          </Route>
          <Route path="/new">
            <NewProduct addProduct={addProduct} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;