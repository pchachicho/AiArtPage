import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact";
import Explore from "./components/Explore/Explore";
import Login from "./components/Login/Login";
function App() {
  return (
    <div>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App