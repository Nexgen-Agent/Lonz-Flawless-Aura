import React from "react";
import Hero from "./components/Hero";
import Routine from "./components/Routine";
import Shop from "./components/Shop";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Hero />
      <Routine />
      <Shop />
      <Reviews />
      <Contact />
    </div>
  );
}