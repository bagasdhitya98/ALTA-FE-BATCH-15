import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import News from "./pages/news";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<News />} path="/news" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
