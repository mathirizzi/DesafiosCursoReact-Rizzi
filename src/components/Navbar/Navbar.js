import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHashtag, faMessage} from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  const instagramIcon = <FontAwesomeIcon icon={faHashtag} />
  const whatsappIcon = <FontAwesomeIcon icon={faMessage} />
  return (
    <div className="container-fluid">
      <header className="header d-flex row">
        <div className="row align-items-center">
          <div className="redes col-2">
            <Link to="/">
              <span>{instagramIcon}</span>
              <span>{whatsappIcon}</span>
              </Link>
          </div>

          <div className="logo col-8">
            <Link to="/">Traume</Link>
          </div>

          <div className="cartWidget col-2">
            <CartWidget count={1} />
          </div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="navbar col-8">
            <ul className="links row d-flex w-100 m-0">
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
                <NavDropdown.Item>
                  <Link to="/categoria/mordidagrande">Mordida grande</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                  <Link to="/categoria/mordidamediana">Mordida mediana</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                  <Link to="/categoria/mordidachica">Mordida chica</Link>
                  </NavDropdown.Item>
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
