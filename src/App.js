import React from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/aboutUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Container />} />
          <Route path="/aboutus" element={<AboutUs />} />
          {/*<Route path="/events" element={<Events />} / */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;