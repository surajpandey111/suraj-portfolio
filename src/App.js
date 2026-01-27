import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Explore from "./Explore";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Login />} />

        {/* Main Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />

        {/* Safety Redirect (VERY IMPORTANT for Render) */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
