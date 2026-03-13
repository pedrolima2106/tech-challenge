import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#282c34",
      padding: "15px",
      display: "flex",
      gap: "20px"
    }}>

      <Link to="/" style={{color: "white"}}>
        Home
      </Link>

      <Link to="/admin" style={{color: "white"}}>
        Admin
      </Link>

      <Link to="/create" style={{color: "white"}}>
        Criar Post
      </Link>

    </nav>
  );
}

export default Navbar;