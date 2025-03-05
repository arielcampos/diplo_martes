
import '../../styles/components/layout/Nav.css';

import { NavLink } from "react-router-dom"



const Nav = (props) => {
    return (
        <nav>
            <div class="header">
            <div class="menu">
                <img src="/images/logo.png" />
                <nav>
                    <div class="nav">
                        <ul>
                        <li> <NavLink to="/" className={({ isActive}) => isActive ? "activo" : undefined}> Home </NavLink> </li>
                        <li> <NavLink to="/Servicios" className={({ isActive}) => isActive ? "activo" : undefined}> Servicios </NavLink> </li>
                        <li> <NavLink to="/Portfolio" className={({ isActive}) => isActive ? "activo" : undefined}> Portfolio </NavLink> </li>
                        <li> <NavLink to="/Testimonios" className={({ isActive}) => isActive ? "activo" : undefined}> Testimonios </NavLink> </li>
                        <li> <NavLink to="/Precios" className={({ isActive}) => isActive ? "activo" : undefined}> Precios </NavLink> </li>
                        <li> <NavLink to="/Contacto" className={({ isActive}) => isActive ? "activo" : undefined}> Contacto </NavLink> </li>
                 
                        </ul>
                    </div>
                </nav>
                
            </div>
        </div>

        </nav>
    );
}

export default Nav;