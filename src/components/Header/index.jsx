import Logo from '../../assets/logo.png'
import "./styles.scss"
import { NavLink, Link } from "react-router-dom";


function Header() {
    return (
        <>
            <nav className='navbar'>
                <Link to="/home">
                    <img className="navimg" src={Logo} alt="logo Kasa" />
                </Link>
                <ul className='navbar-link'>
                    <NavLink className="navlink" to="/home">Home </NavLink>
                    <NavLink className="navlink" to="/about">Participant </NavLink>
                </ul>
            </nav>
        </>
    )
}

export default Header