import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
=======
>>>>>>> 52cffad2d4cb151ef66f885b7d34fcc1e7f0600e
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Cadastro } from "./../pages/Cadastro";
import { NotFound } from "./../pages/NotFound";

export function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
<<<<<<< HEAD
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
=======
>>>>>>> 52cffad2d4cb151ef66f885b7d34fcc1e7f0600e
    </Router>
  );
}
