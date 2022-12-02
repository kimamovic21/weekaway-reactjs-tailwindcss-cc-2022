import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Booking from "./components/Booking";
import ImageGalleries from "./components/ImageGalleries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <TopBar />
      <Hero />
      <Activities />
      <Booking />
      <ImageGalleries />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
