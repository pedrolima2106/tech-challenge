import { useEffect, useState } from "react";
import api from "../services/api";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h1>Lista de Posts</h1>

      <input
        type="text"
        placeholder="Buscar posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

    </div>
  );
}

export default Home;