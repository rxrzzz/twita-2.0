import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import CreatePost from "./components/home/CreatePost";

function App() {
  const person = localStorage.getItem("personInStorage");
  return (
    <div className="App">
      <Router>
        <Routes>
          {person ? (
            <Route exact path="/login" element={<Login/>} />
          ) : (
            <Route exact path="/home" element={<Home/>} />
          )}

          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />

          <Route path="/create_post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      {/* <Register/> */}
      <Login />
    </div>
  );
}

export default App;
