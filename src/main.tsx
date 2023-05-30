import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Presupuesto from "./pages/Presupuesto";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="presupuesto" element={<Presupuesto />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>,
);
