import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

export default function Navbar() {
  return (
    <div className="container-fluid">
      <header className="header d-flex border row">
        <div className="row align-items-center">
          <div className="redes border col-2">
            <Link to="/">Redes</Link>
          </div>

          <div className="logo border col-8">
            <Link to="/">Traume</Link>
          </div>

          <div className="cartWidget border col-2">
            <CartWidget count={1} />
          </div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="navbar border col-8">
            <ul className="links row border d-flex w-100 m-0">
              <li className="col-3">
                <Link to="/">Inicio</Link>
              </li>

              <li className="col-3">
                <Link to="/productos">Productos</Link>
              </li>
              <li className="col-3">
                <Link to="/fetch">Fetch</Link>
              </li>
              <li className="col-3">
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                  <Link to="/categoria/mordidagrande">Mordida grande</Link>
                  <Link to="/categoria/mordidamediana">Mordida mediana</Link>
                  <Link to="/categoria/mordidachica">Mordida chica</Link>
                </NavDropdown>
              </li>
            </ul>
          </div>
          <div className="col-2"></div>
        </div>
      </header>
    </div>
  );
}
