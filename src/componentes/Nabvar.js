import React from 'react'

const Navbar = () => {
    return (
      <div>
      <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="a">
          <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
          Bootstrap
        </a>
      </div>
    </nav>
        <nav role="navigation" classNameName="navbar navbar-expand-lg navbar-light bg-light">
  <div classNameName="container-fluid">
    <a classNameName="navbar-brand" href="a">Joyeria""</a>
    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span>
    </button>
    <div classNameName="collapse navbar-collapse" id="navbarNavDropdown">
      <ul classNameName="navbar-nav">
        <li classNameName="nav-item">
          <a classNameName="nav-link active" aria-current="page" href="a">Home</a>
       </li>           
        <li classNameName="nav-item dropdown">
          <a classNameName="nav-link dropdown-toggle" href="a" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Colecciones
          </a>
          <ul classNameName="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a classNameName="dropdown-item" href="a">Anillos</a></li>
            <li><a classNameName="dropdown-item" href="a">Aretes</a></li>
            <li><a classNameName="dropdown-item" href="a">Dijes</a></li>
            <li><a classNameName="dropdown-item" href="a">Pulseras</a></li>
            <li><a classNameName="dropdown-item" href="a">Collares</a></li>
            <li><a classNameName="dropdown-item" href="a">Mascotas</a></li>
            <li><a classNameName="dropdown-item" href="a">Juegos</a></li>
          </ul>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link" href="a">Novedades</a>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link" href="a">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}

export default Navbar; 
