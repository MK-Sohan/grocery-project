import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Share/Footer";
import { Route, Routes } from "react-router-dom";
import Allproducts from "./Pages/AllProducts/Allproducts";
import Login from "./Pages/Authentication/Login/Login";
import Signup from "./Pages/Authentication/Signup/Signup";
import RequireAuth from "./Pages/Share/RequireAuth";
import Cart from "./Pages/Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/products"
          element={
            <RequireAuth>
              <Allproducts></Allproducts>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart></Cart>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
