import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          {/* <Route exact path="/about" element={""} />
          <Route exact path="/login" element={""} />
          <Route exact path="/stocks" element={""} />
          <Route exact path="/account" element={""} />
          <Route exact path="/" element={""} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App
