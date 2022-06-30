import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import "../styles/Navbar.css";
const MenuItem = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow nav___bg">
      <div className="container-fluid">
        <a class="navbar-brand" href="https://library.livecanvas.com/sections/">
          <img
            class="img-fluid"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Rabindra_University_Logo.svg/1200px-Rabindra_University_Logo.svg.png"
            alt=""
            style={{ width: "48px", height: "48px" }}
          />
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Students
              </a>
              <ul className="dropdown-menu shadow">
                <li>
                  <a className="dropdown-item" href="#">
                    Administration
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="blog.html">
                    Students
                  </a>
                </li>
                <li className="dropstart">
                  <a
                    href="#"
                    className="dropdown-item dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Research
                  </a>
                  <ul className="dropdown-menu shadow">
                    <li>
                      <a className="dropdown-item" href="">
                        {" "}
                        Third level 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="">
                        {" "}
                        Third level 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="">
                        {" "}
                        Third level 3
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="">
                        {" "}
                        Third level 4
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="">
                        {" "}
                        Third level 5
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropend">
                  <a
                    href="#"
                    className="dropdown-item dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    Submenu Right
                  </a>
                  <ul className="dropdown-menu shadow">
                    <li>
                      <a className="dropdown-item" href="">
                        {" "}
                        Second level 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="">
                        {" "}
                        Second level 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="">
                        {" "}
                        Second level 3
                      </a>
                    </li>
                    <li className="dropend">
                      <a
                        href="#"
                        className="dropdown-item dropdown-toggle"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                      >
                        Let's go deeper!
                      </a>
                      <ul className="dropdown-menu dropdown-submenu shadow">
                        <li>
                          <a className="dropdown-item" href="">
                            {" "}
                            Third level 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="">
                            {" "}
                            Third level 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="">
                            {" "}
                            Third level 3
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="">
                            {" "}
                            Third level 4
                          </a>
                        </li>
                        <li className="dropend">
                          <a
                            href="#"
                            className="dropdown-item dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            Still don't have enough? Go much deeper!
                          </a>
                          <ul className="dropdown-menu dropdown-submenu shadow">
                            <li>
                              <a className="dropdown-item" href="">
                                {" "}
                                Third level 1
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                {" "}
                                Third level 2
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                {" "}
                                Third level 3
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                {" "}
                                Third level 4
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                {" "}
                                Third level 5
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="">
                        {" "}
                        Third level 5
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Research
              </a>
            </li>
            <li className="nav-item dropdown dropdown-mega position-static">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Academics
              </a>
              <div className="dropdown-menu shadow">
                <div className="mega-content px-4">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-sm-4 col-md-3 py-4">
                        <h5>No additional JS</h5>
                        <div className="list-group">
                          <a className="list-group-item" href="#">
                            Accomodations
                          </a>
                          <a className="list-group-item" href="#">
                            Terms &amp; Conditions
                          </a>
                          <a className="list-group-item" href="#">
                            Privacy
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-4 col-md-3 py-4">
                        <h5>No Additional CSS</h5>
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
                      </div>
                      <div className="col-12 col-sm-4 col-md-3 py-4">
                        <h5>Lot of Pages</h5>
                        <p>
                          Lorem ipsum dolo sit achmet muhamed borlan de irtka.
                        </p>
                      </div>
                      <div className="col-12 col-sm-12 col-md-3 py-4">
                        <h5>Damn, so many</h5>
                        <div className="list-group">
                          <a className="list-group-item" href="#">
                            Accomodations
                          </a>
                          <a className="list-group-item" href="#">
                            Terms &amp; Conditions
                          </a>
                          <a className="list-group-item" href="#">
                            Privacy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabindex="-1">
                Administration
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
              <button className="btn btn-primary border-0 " type="submit">
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
