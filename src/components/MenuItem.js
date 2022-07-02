import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const MenuItem = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-light shadow sticky-top nav___bg "
      id="mainNav"
    >
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
          Bootstrap{" "}
        </a> */}
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-content"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-content">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                About Us
              </a>
              <ul className="dropdown-menu shadow">
                <li>
                  <Link className="dropdown-item" to="/gallery">
                    About Rub
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="blog.html">
                    Syndicate
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="blog.html">
                    NOC
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="blog.html">
                    APA
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="blog.html">
                    Mujibcorner
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="blog.html">
                    Procurement
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="blog.html">
                    Job Circular
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Administration
              </a>
            </li>
            <li className="nav-item dropdown dropdown-mega position-static">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Academic
              </a>
              <div className="dropdown-menu shadow">
                <div className="mega-content px-4">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-sm-4 col-md-6 py-4">
                        <h5> Academic Left Info navigation</h5>
                        <div className="list-group">
                          <a className="list-group-item" href="#">
                            Vice Chancellor
                          </a>
                          <a className="list-group-item" href="#">
                            Treasurer
                          </a>
                          <a className="list-group-item" href="#">
                            Registrar
                          </a>
                          <a className="list-group-item" href="#">
                            Finance & Accounts
                          </a>
                          <a className="list-group-item" href="#">
                            Planing & Developme
                          </a>
                        </div>
                      </div>
                      {/* <div className="col-12 col-sm-4 col-md-3 py-4">
                        <h5> Academic Image</h5>
                        <div className="card">
                          <img
                            src="https://images.unsplash.com/photo-1509599589979-3b5a15d2816e?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NDR8fGZvcmVzdHxlbnwwfDB8fHwxNjM0OTkxMjA3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=768"
                            className="img-fluid"
                            alt="image"
                          />
                          <div className="card-body">
                            <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="col-12 col-sm-4 col-md-3 py-4">
                        <h5>Lot of Pages</h5>
                        <p>
                          Lorem ipsum dolo sit achmet muhamed borlan de irtka.
                        </p>
                      </div> */}
                      <div className="col-12 col-sm-12 col-md-6 py-4">
                        <h5> Academic Right Info navigation</h5>
                        <div className="list-group">
                          <a className="list-group-item" href="#">
                            Exam Controller
                          </a>
                          <a className="list-group-item" href="#">
                            Central Library
                          </a>
                          <a className="list-group-item" href="#">
                            Medical Center
                          </a>
                          <a className="list-group-item" href="#">
                            ICT Cell
                          </a>
                          <a className="list-group-item" href="#">
                            IQAC
                          </a>
                          <a className="list-group-item" href="#">
                            Public Relation Office
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown dropdown-mega position-static">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Publications
              </a>
              <div className="dropdown-menu shadow">
                <div className="mega-content px-4">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-sm-4 col-md-12 py-4">
                        <h5> Publications menu</h5>
                        <div className="list-group">
                          <a className="list-group-item" href="#">
                            RUB Journals
                          </a>
                          <a className="list-group-item" href="#">
                            RUB Books
                          </a>
                          <a className="list-group-item" href="#">
                            ----
                          </a>
                        </div>
                      </div>
                      {/* <div className="col-12 col-sm-4 col-md-3 py-4">
                        <h5>Publications Book</h5>
                        <div className="card">
                          <img
                            src="https://images.unsplash.com/photo-1509599589979-3b5a15d2816e?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NDR8fGZvcmVzdHxlbnwwfDB8fHwxNjM0OTkxMjA3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=768"
                            className="img-fluid"
                            alt="image"
                          />
                          <div className="card-body">
                            <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="col-12 col-sm-4 col-md-3 py-4">
                        <h5>Lot of Pages</h5>
                        <p>
                          Lorem ipsum dolo sit achmet muhamed borlan de irtka.
                        </p>
                      </div> */}
                      <div className="col-12 col-sm-12 col-md-12 py-4">
                        <h5> so many</h5>
                        <div className="list-group">
                          <a className="list-group-item" href="#">
                            ----
                          </a>
                          <a className="list-group-item" href="#">
                            ----
                          </a>
                          <a className="list-group-item" href="#">
                            ----
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" tabindex="-1">
                Admission & Result
              </a>
            </li>
          </ul>
          {/* <form className="d-flex ms-auto">
            <div className="input-group">
              <input
                className="form-control border-0 mr-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary border-0" type="submit">
                Search
              </button>
            </div>
          </form> */}

          <div class="ms-lg-auto">
            <a class="custom__btn me-2  btn-sm " href="#">
              <FaUserTie className="login___icon" /> ru login
            </a>
            <a class="custom__btn btn-sm " href="#">
              <FaUserGraduate className="login___icon" /> student login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuItem;
