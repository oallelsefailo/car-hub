import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Rides from "./components/Rides";
import Update from "./components/update";
import SubmitRides from "./components/SubmitRides";
import RidesExpanded from "./components/RidesExpanded";
import AboutUs from "./components/aboutUs";
import AboutEvents from "./components/AboutEvents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEvent from "./components/AddEvent";
import EventsPage from "./components/EventsPage";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/rides/:id" element={<RidesExpanded />} />
          <Route path="/rides/update/:id" element={<Update />} />
          <Route path="/rides/submit" element={<SubmitRides />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/about/events" element={<AboutEvents />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path='/events/AddEvent' element={<AddEvent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
