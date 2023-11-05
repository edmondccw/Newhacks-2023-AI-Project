import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

// Import your Login and Register components
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <Router>
      <div>
        {/* ... your existing code ... */}
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
