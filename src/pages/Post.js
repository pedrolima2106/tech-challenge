import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log("Erro ao carregar post:", error);
      });
  }, [id]);

  if (!post) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>

      <p>
        <strong>Autor:</strong> {post.author}
      </p>

      <p>{post.description}</p>
    </div>
  );
}

export default Post;