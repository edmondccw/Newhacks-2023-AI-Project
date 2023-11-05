import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

// Import your Login and Register components
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [count, setCount] = useState(0);
  // article 
  // const [articles, setArticles] = useState([]);
  // Modify the current state by setting the new data to
  // the response from the backend
  useEffect(() => {
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "john_doe",
        password: "mysecretpassword",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      // .then((response) => setArticles(response))
      .catch((error) => console.log(error));
  }, []);

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
