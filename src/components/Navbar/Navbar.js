import CartWidget from "../CartWidget/CartWidget";
import {Link} from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';

export default function Navbar() {

const headerStyle = {
    display: "flex",
    backgroundColor: "#F4F4F4",
    color: "#75485E",
}

const logoStyle = {
    fontSize: "50px",
    width: "20%",
}

const navbarStyle = {
    fontSize: "20px",
    width: "80%",
}

const linkStyle = {
display: "flex",
justifyContent: "space-around",
listStyle: "none",


}

    return (
    
        <header className="header" style={headerStyle}>
        
            <div className="logo" style={logoStyle}>
                <Link to="/">Traume</Link>
                </div>
            <div className="navbar" style={navbarStyle}>
            <ul className="links" style={linkStyle}>
                <li className="m-2">
                    <Link to="/">Inicio</Link>
                    </li>
                   
                <li className="m-2">
                   <Link to="/productos">Productos</Link>
                    </li>
                    <li className="m-2">
                   <Link to="/fetch">Fetch</Link>
                    </li>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
          <NavDropdown.Item href="/categoria/mordidagrande">Mordida grande</NavDropdown.Item>
          <NavDropdown.Item href="/categoria/mordidamediana">Mordida mediana</NavDropdown.Item>
          <NavDropdown.Item href="/categoria/mordidachica">Mordida chica</NavDropdown.Item>

        </NavDropdown>
            </ul>
        </div>
        <CartWidget count={1}/>
        </header>
    
    );
  }
  
  
