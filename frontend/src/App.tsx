import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>TestAPI</div>
      <div className="App container m-4">
        <div className="row">
          <div className="text-center">
            <h1>Connecting a React Frontend to a Flask Backend.</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
