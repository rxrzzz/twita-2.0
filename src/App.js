import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  const person = localStorage.getItem("personInStorage");
  return (
    <div className="App">
      <Router>
        <Routes>
          {person ? (
            <Route exact path="/" element={<Home />} />
          ) : (
            <Route exact path="/" element={<Login />} />
          )}
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
      {/* <Register/> */}
      <Login />
    </div>
  );
}

export default App;
