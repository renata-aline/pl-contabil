
import Menu from '../Menu';
import './index.css'


function Navbar() {
    return (
        <header >
            <div className="navbar">
                <Menu />
                <img className="logo" src="/image/logo-pl.jpg" alt="logo da empresa PL-Contabilidade" />
            </div>
        </header>
    )
}

export default Navbar