import { Link, NavLink } from 'react-router-dom';



export const Navbar = () => {
    return (<>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-center">

            <Link
                className="navbar-brand px-3"
                to="/"
            >
                Inicio
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav ">

                    <NavLink
                        className="nav-item nav-link"
                        to="/inscripcion"
                    >
                        Inscripciones
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link"
                        to="/informacion"
                    >
                        Información
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/mapa"
                    >
                        Mapa
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link"
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