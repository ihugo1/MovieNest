import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./Pages/Home/Home";
import { Movie } from "./Pages/Movie/Movie";
import { Catalog } from "./Pages/Catalog/Catalog";

export const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
};
