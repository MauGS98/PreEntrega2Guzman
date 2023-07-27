import { Link, NavLink } from "react-router-dom"

import CartWidget from "../CartWidget/CartWidget"

import './navbar.css'

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to='/'>
                <img className="nav_logo" src="./src/components/Navbar/assets/placaBlanca.svg" alt="logo_img" />
            </Link>
            <div className="nav_links">
                <NavLink to={'/category/crucero'}
                    className={({isActive}) => isActive ? 'used_link' : 'unused_link'}>
                    Crucero
                </NavLink>
                <NavLink to={'/category/deportiva'}
                    className={({isActive}) => isActive ? 'used_link' : 'unused_link'}>
                    Deportiva
                </NavLink>
                <NavLink to={'/category/doble_proposito'}
                    className={({isActive}) => isActive ? 'used_link' : 'unused_link'}>
                    Doble proposito
                </NavLink>
                <NavLink to={'/category/clasica'}
                    className={({isActive}) => isActive ? 'used_link' : 'unused_link'}>
                    Clasica
                </NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar