import { useState } from "react";
import api from "../services/api";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      author,
      description
    };

    api.post("/posts", newPost)
      .then(() => {
        alert("Post criado com sucesso!");
      })
      .catch((error) => {
        console.log("Erro ao criar post:", error);
      });
  };

  return (
    <div>
      <h1>Criar Post</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <textarea
          placeholder="Conteúdo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">
          Criar Post
        </button>

      </form>
    </div>
  );
}

export default CreatePost;