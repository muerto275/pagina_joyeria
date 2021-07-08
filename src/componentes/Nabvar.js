import React from 'react'

const Navbar = () => {
  return (<div role="navigation">
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="a">
          <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
          Bienvenid@
        </a>
      </div>
    </nav>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="a">MARCA</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Home">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="a" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Catalogo
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="s">Anillos</a></li>
                <li><a className="dropdown-item" href="a">Aretes</a></li>
                <li><a className="dropdown-item" href="a">Collares</a></li>
                <li><a className="dropdown-item" href="a">Dijes</a></li>
                <li><a className="dropdown-item" href="a">Juegos</a></li>
                <li><a className="dropdown-item" href="a">Mascotas</a></li>
                <li><a className="dropdown-item" href="a">Pulseras</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="a">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="a">Carrito</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar;
