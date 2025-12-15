import { Route, Routes } from "react-router";
import {  useDispatch } from "react-redux";
import AppLayout from "./Layout/AppLayout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import { useEffect } from "react";
import { loadProducts } from "./features/productsSlice";
import ProductsDetails from "./Pages/ProductsDetails";
import Login from "./Pages/Login";
import UserDashboard from "./Pages/UserDashboard";
import Checkout from "./Pages/Checkout";
import NotFound from "./Pages/NotFound";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { setCurrentUser } from "./features/userSlice";
import AIComplaints from "./Pages/AIComplaint";
const App = () => {
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);


  useEffect(()=>{
    const savedUser = localStorage.getItem('user');
    if(savedUser){
      dispatch(setCurrentUser(JSON.parse(savedUser)))
    }
  },[dispatch])

  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login/:id" element={<UserDashboard />} />
          <Route path="/complaints" element={<AIComplaints />}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
