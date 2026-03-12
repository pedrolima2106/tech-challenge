import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function EditPost() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    api.get(`/posts/${id}`)
      .then((response) => {
        const post = response.data;

        setTitle(post.title);
        setAuthor(post.author);
        setDescription(post.description);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      title,
      author,
      description
    };

    api.put(`/posts/${id}`, updatedPost)
      .then(() => {
        alert("Post atualizado!");
      });
  };

  return (
    <div>
      <h1>Editar Post</h1>

      <form onSubmit={handleSubmit}>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">
          Salvar alterações
        </button>

      </form>
    </div>
  );
}

export default EditPost;