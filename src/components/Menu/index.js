import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.css";

const Menu = () => {
  const [isToggle, setToggle] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  useEffect(() => {
    setToggle(!isMobile)
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
        <div className={`menu ${!isMobile && 'active'}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/sobre-nós">Sobre Nós</a>
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
