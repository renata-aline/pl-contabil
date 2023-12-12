import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.css";

const Menu = () => {
  const [isToggle, setToggle] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setToggle(!isMobile);
  }, [isMobile]);

  return (
    <>
      {isMobile && (
        <button
          onClick={() => setToggle(!isToggle)}
          type="button"
          className="navbar_button-action"
        >
          <MenuIcon />
        </button>
      )}

      {isToggle && (
        <div className={`menu ${!isMobile && "active"}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre-nos">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/servicos">Serviços</Link>
            </li>
            <li>
              <Link to="/duvidas-frequentes">Duvidas Frequentes</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;
