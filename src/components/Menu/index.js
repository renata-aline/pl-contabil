import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.css";

const Menu = () => {
  const [isToggle, setToggle] = useState(false);

  return (
    <>
      <button
        onClick={() => setToggle(!isToggle)}
        type="button"
        className="navbar_button-action"
      >
        <MenuIcon />
      </button>
      {isToggle && (
        <div className="menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/servicos">Serviços</a>
            </li>
            <li>
              <a href="/duvidas-frequentes">Dúvidas Frequentes</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;
