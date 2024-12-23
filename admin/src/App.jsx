import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import CustomRoutes from "./custom-components/CustomRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import Layout from "./components/Layout";

// eslint-disable-next-line
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<CustomRoutes />}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to="/list" />} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
