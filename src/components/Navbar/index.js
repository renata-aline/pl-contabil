import { Link } from "react-router-dom";
import Menu from "../Menu";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Menu />

      <Link to="/" className="navbar_logo">
        <img src="./images/logo-pl.png" alt="logo da empresa PL-Contabilidade" />
      </Link>
    </nav>
  );
};

export default Navbar;
