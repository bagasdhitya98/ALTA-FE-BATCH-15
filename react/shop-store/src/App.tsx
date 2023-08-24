import { BrowserRouter, Routes, Route } from "react-router-dom";

import Detail from "./pages/detail";
import Product from "./pages/product";
import Login from "./pages/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="shop/login" />
        <Route element={<Product />} path="shop/product" />
        <Route element={<Detail />} path="shop/detail/:id" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
