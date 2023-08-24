import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Detail from "./pages/detail";
import Product from "./pages/product";
import Login from "./pages/login";
import Landing from "./pages/landing";

const App = () => {
  axios.defaults.baseURL = "https://fakestoreapi.com/";

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Product />} path="/product" />
        <Route element={<Detail />} path="/detail/:id" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
