import "../styles/Counter.css";
const Counter = () => {
  return (
    <div className="col-md-6 d-flex align-items-center mt-6">
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card card-body shadow border-0 shadow border-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ minHeight: "120px" }}
            >
              <div className="me-2">
                <div className="bg-light p-2 rounded-circle">
                  <svg
                    version="1.1"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                    lc-helper="svg-icon"
                    fill="currentColor"
                  >
                    <path d="M4,2A1,1 0 0,0 3,3V4A1,1 0 0,0 4,5H5V14H11V16.59L6.79,20.79L8.21,22.21L11,19.41V22H13V19.41L15.79,22.21L17.21,20.79L13,16.59V14H19V5H20A1,1 0 0,0 21,4V3A1,1 0 0,0 20,2H4Z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <span className=" mb-5 count__number">83</span>
                <p className="lead" editable="inline">
                  <span className="count__text">Departments</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card card-body shadow border-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ minHeight: "120px" }}
            >
              <div className="me-2">
                <div className="bg-light p-2 rounded-circle">
                  <svg
                    version="1.1"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                    lc-helper="svg-icon"
                    fill="currentColor"
                  >
                    <path d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <span className=" mb-5 count__number">37000</span>
                <p className="lead" editable="inline">
                  <span className="count__text">Regular Students</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card card-body shadow border-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ minHeight: "120px" }}
            >
              <div className="me-2">
                <div className="bg-light p-2 rounded-circle">
                  <svg
                    version="1.1"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                    lc-helper="svg-icon"
                    fill="currentColor"
                  >
                    <path d="M13,17V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H5V15.5C5,13.57 8.13,12 12,12C15.87,12 19,13.57 19,15.5V17H13M12,3A3.5,3.5 0 0,1 15.5,6.5A3.5,3.5 0 0,1 12,10A3.5,3.5 0 0,1 8.5,6.5A3.5,3.5 0 0,1 12,3Z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <span className=" mb-5 count__number">2000</span>
                <p className="lead" editable="inline">
                  <span className="count__text">aculty Members</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card card-body shadow border-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ minHeight: "120px" }}
            >
              <div className="me-2">
                <div className="bg-light p-2 rounded-circle">
                  <svg
                    version="1.1"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                    lc-helper="svg-icon"
                    fill="currentColor"
                  >
                    <path d="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <span className=" mb-5 count__number">13</span>
                <p className="lead" editable="inline">
                  <span className="count__text">Institutes</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
