import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      <h2>{post.title}</h2>

      <p>
        <strong>Autor:</strong> {post.author}
      </p>

      <p>{post.description}</p>

      <Link to={`/post/${post.id}`}>
        Ler mais
      </Link>

    </div>
  );
}

export default PostCard;