import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Rides from "./components/Rides";
import Update from "./components/update";
import SubmitRides from "./components/SubmitRides";
import AboutUs from "./components/AboutUs";
import AboutEvents from "./components/AboutEvents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/rides/update" element={<Update />} />
          <Route path="/rides/submit" element={<SubmitRides />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/events" element={<AboutEvents />} />
          {/*<Route path="/events" element={<Events />} />
           */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;