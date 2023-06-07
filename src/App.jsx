import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import ProductList from "./Page/ProductList";
import Register from "./Page/Register.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Login />

        <Register />
        <Routes>
          <Route path="/Login" element={Login} />
          <Route path="/ProductList" element={ProductList} />
          <Route Path="/Register" element={Register} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
