import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Post from "../pages/Post";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";
import Admin from "../pages/Admin";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;