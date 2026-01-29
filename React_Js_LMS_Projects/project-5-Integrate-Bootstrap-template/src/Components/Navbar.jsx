import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark border bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bolder fs-2 px-2 bg-primary rounded-5" to="/">PK</Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item fs-5"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item fs-5"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item fs-5"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item fs-5"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
