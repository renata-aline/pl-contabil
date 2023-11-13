import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './index.css'

function Menu() {
    const [isToggle, setToggle] = useState(true);


    return (
        <>
            <button onClick={() => setToggle(!isToggle)} type="button" className='navbar_button-action'>
                <MenuIcon />
            </button>
            {isToggle &&
                <div className="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Dúvidas Frequentes</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
            }
        </>
    )
}

export default Menu