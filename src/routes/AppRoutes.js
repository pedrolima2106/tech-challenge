import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Admin from "../pages/Admin";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/edit/:id" element={<EditPost />} />
    </Routes>
  );
}

export default AppRoutes;