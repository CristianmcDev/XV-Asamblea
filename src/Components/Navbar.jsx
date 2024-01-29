import { Link, NavLink } from 'react-router-dom';



export const Navbar = () => {
    return (<>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-center">

            <Link
                className="navbar-brand px-3 text-center"
                to="/"
            >
                Inicio
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav ">
                    <NavLink
                        className="nav-item nav-link navCss"
                        to="/inscripcion"
                    >
                        Inscripciones
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link navCss"
                        to="/informacion"
                    >
                        Asamblea
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link navCss"
                        to="/mapa"
                    >
                        Localizaciones
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link navCss"
                        to="/cordoba"
                    >
                        Córdoba
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link navCss"
                        to="/contacto"
                    >
                        Contacto
                    </NavLink>
                </div>
            </div>
        </nav>
        </>
    )
}