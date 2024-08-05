import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark m-3">
      <div className="container-fluid">
        <h1 className="text-bold text-primary m-2">
          <img
            src="https://i.pinimg.com/originals/a0/13/4c/a0134ccae5b48f3865c5795dc34414bb.jpg"
            width="200"
            height="150"
            className="d-inline-block align-top"
            alt=""
          />
        </h1>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item m-5">
              <Link to="/home">
                <h4>Home</h4>
              </Link>
            </li>

            <li className="nav-item dropdown m-5">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h4>Products</h4>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/products">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/price">
                    Price
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sales">
                    Sales
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/more">
                    More
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item m-5">
              <Link to="/sales">
                <h4>Sales</h4>
              </Link>
            </li>

            <li className="nav-item m-5">
              <Link to="/overview">
                <h4>Online Store Overview</h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
