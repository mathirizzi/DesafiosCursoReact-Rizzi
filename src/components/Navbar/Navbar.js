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
        
            <div className="logo" style={logoStyle}>Traume</div>
            <div className="navbar" style={navbarStyle}>
            <ul className="links" style={linkStyle}>
                <li>Inicio</li>
                <li>Novedades</li>
                <li>Productos</li>
            </ul>
        </div>
        </header>
    
    );
  }
  
  
