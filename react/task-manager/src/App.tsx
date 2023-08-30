import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Todo from "./pages/todo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Todo />} path="/todo" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
