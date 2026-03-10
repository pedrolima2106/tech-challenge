import { useEffect, useState } from "react";
import api from "../services/api";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar posts:", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Posts</h1>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

    </div>
  );
}

export default Home;