
import { Link } from "react-router-dom"


const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li> <Link to="/">Home</Link>  </li>
                    <li> <Link to="/Servicios">Servicios</Link>  </li>
                    <li> <Link to="/Portfolio">Portfolio</Link>  </li> 
                    <li> <Link to="/Testimonios">Testimonios</Link>  </li> 
                    <li> <Link to="/Precios">Precios</Link>  </li> 
                    <li> <Link to="/Contacto">Contacto</Link>  </li>
                </ul>

            </div>

        </nav>
    );
}

export default Nav;