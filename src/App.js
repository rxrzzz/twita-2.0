import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import CreatePost from "./components/home/CreatePost";

function App() {
  const person = localStorage.getItem("personInStorage");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={person ? <Navigate to='/login'/>:""} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create_post" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
