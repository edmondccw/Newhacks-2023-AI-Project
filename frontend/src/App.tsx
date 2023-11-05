import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as matcher from "./constants/matcher";
import { PerformAuthentication } from "./authentication"; // Import the function
import { useState } from "react";

// Import your Login and Register components
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import QuizList from "./components/QuizList";
import Quiz from "./components/Quiz";
import QuizAnswer from "./components/QuizAnswer";

function App() {
  return (
    <Router>
      <div>
        {/* ... your existing code ... */}
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quizList" element={<QuizList />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/answer" element={<QuizAnswer />} />
      </Routes>
    </Router>
  );
}

export default App;
