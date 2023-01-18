import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.png";

function Navbar() {
    return (
        <nav>
            <div>
                <img src={Logo} alt="Get a Pet" />
            </div>
            <ul>
                <Link to="/">Adotar</Link>
            </ul>
            <ul>
                <Link to="/login">Entrar</Link>
            </ul>
            <ul>
                <Link to="/register">Cadastrar</Link>
            </ul>
        </nav>
    );
}

export default Navbar;
