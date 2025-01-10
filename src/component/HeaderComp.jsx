import { NavLink } from "react-router-dom";

export default function HeaderComp() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink to="/" className="nav-link">HomePage</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/AddPost" className="nav-link">Aggiungi Post</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/chisiamo" className="nav-link">Chi Siamo</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}