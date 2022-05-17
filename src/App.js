import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import PostDetails from "./components/PostDetails";
import Profile from "./components/Profile";
import FriendProfile from "./components/FriendProfile";

function App() {
  const person = localStorage.getItem("personInStorage");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={person ? <Navigate to='/home'/>:<Navigate to='/login'/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create_post" element={<CreatePost />} />
          <Route exact path="/posts/:id" element={<PostDetails />} />
          <Route exact path=':username/profile' element={<FriendProfile/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
