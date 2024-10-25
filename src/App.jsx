import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./Pages/Home/Home";

export const App = () => {
  return( 
    <div>
      <NavBar />
      <Home/>
    </div>
  );
};
