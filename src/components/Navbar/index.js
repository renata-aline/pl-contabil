import Menu from "../Menu";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Menu />
      <a className="navbar_logo" href="/">
        <img src="/image/logo-pl.jpg" alt="logo da empresa PL-Contabilidade" />
      </a>
    </nav>
  );
};

export default Navbar;
