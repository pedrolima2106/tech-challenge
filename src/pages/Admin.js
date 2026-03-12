import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function Admin() {
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    api.get("/posts")
      .then((response) => {
        setPosts(response.data);
      });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const deletePost = (id) => {
    api.delete(`/posts/${id}`)
      .then(() => {
        loadPosts();
      });
  };

  return (
    <div>

      <h1>Painel Administrativo</h1>

      <Link to="/create">
        Criar novo post
      </Link>

      {posts.map((post) => (
        <div key={post.id}>

          <h3>{post.title}</h3>

          <Link to={`/edit/${post.id}`}>
            Editar
          </Link>

          <button onClick={() => deletePost(post.id)}>
            Excluir
          </button>

        </div>
      ))}

    </div>
  );
}

export default Admin;