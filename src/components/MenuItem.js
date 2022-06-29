import "../styles/Navbar.css";

const MenuItem = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm nav___bg">
      <div className="container-fluid">
        <a href="#" className="navbar-brand font-weight-bold d-block d-lg-none">
          MegaMenu
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown megamenu">
              <a
                id="megamneu"
                href="#"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle"
              >
                Mega Menu
              </a>
              <div
                aria-labelledby="dropdownMenuButton1"
                className="dropdown-menu border-0 p-0 m-0"
              >
                <div className="container">
                  <div className="row bg-white rounded-0 m-0 shadow-sm">
                    <div className="col-lg-7 col-xl-8">
                      <div className="p-4">
                        <div className="row">
                          <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              MegaMenu heading
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a href="" className="nav-link text-small pb-0">
                                  Unique Features
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Image Responsive
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Auto Carousel
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Newsletter Form
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              MegaMenu heading
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Unique Features
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Image Responsive
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Auto Carousel
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Newsletter Form
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              MegaMenu heading
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Unique Features
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Image Responsive
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Auto Carousel
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Newsletter Form
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              MegaMenu heading
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Unique Features
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Image Responsive
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Auto Carousel
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Newsletter Form
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-5 col-xl-4 px-0 d-none d-lg-block megaimaga"></div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link font-weight-bold text-uppercase">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link font-weight-bold text-uppercase">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link font-weight-bold text-uppercase">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenuItem;
