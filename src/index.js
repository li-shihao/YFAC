import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Ambassador from "./routes/Ambassador";
import Guide from "./routes/Guide";
import FAQ from "./routes/FAQ";
import Judges from "./routes/Judges";
import Prizes from "./routes/Prizes";
import Winners from "./routes/winners";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ambassador" element={<Ambassador />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/judges" element={<Judges />} />
        <Route path="/prizes" element={<Prizes />} />
        <Route path="/winners" element={<Winners />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
