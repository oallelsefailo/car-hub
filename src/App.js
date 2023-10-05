import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Rides from "./components/Rides";
import Update from "./components/update"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEvent from "./components/AddEvent";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/rides/update" element={<Update />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/AddEvent" element={<AddEvent />} />
          {/*<Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
