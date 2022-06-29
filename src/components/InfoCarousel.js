const InfoCarousel = () => {
  return (
    <div className="lc-block py-5 text-center">
      <div
        id="carouselTestimonial"
        className="carousel slide pb-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner px-5">
          <div className="carousel-item">
            <div className="row">
              <div className="lc-block">
                <div editable="rich">
                  <p className="rfs-8 text-muted">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc et metus id ligula malesuada placerat sit amet quis
                    enim. Aliquam erat volutpat. In pellentesque scelerisque
                    auctor."
                  </p>
                </div>
              </div>
              <div className="lc-block">
                <div className="lc-block d-inline-flex">
                  <div className="lc-block me-3" style={{ minWidth: "72px" }}>
                    <img
                      className="img-fluid rounded-circle "
                      src="https://i.pravatar.cc/96?img=6"
                      width="72"
                      height="72"
                    />
                  </div>
                  <div className="lc-block">
                    <div editable="rich">
                      <p className="h5">James C. Call</p>

                      <p className="text-muted">Street Artist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="lc-block">
                <div editable="rich">
                  <p className="rfs-8">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc et metus id ligula malesuada placerat sit amet quis
                    enim. Aliquam erat volutpat. In pellentesque scelerisque
                    auctor."
                  </p>
                </div>
              </div>
              <div className="lc-block">
                <div className="lc-block d-inline-flex">
                  <div className="lc-block me-3" style={{ minWidth: "72px" }}>
                    <img
                      className="img-fluid rounded-circle "
                      src="https://i.pravatar.cc/96?img=23"
                      width="72"
                      height="72"
                    />
                  </div>
                  <div className="lc-block">
                    <div editable="rich">
                      <p className="h5">Leslie R. Oleary</p>

                      <p className="text-muted">Fashion designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="row">
              <div className="lc-block">
                <div editable="rich">
                  <p className="rfs-8">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc et metus id ligula malesuada placerat sit amet quis
                    enim. Aliquam erat volutpat. In pellentesque scelerisque
                    auctor."
                  </p>
                </div>
              </div>
              <div className="lc-block">
                <div className="lc-block d-inline-flex">
                  <div className="lc-block me-3" style={{ minWidth: "72px" }}>
                    <img
                      className="img-fluid rounded-circle "
                      src="https://i.pravatar.cc/96?img=26"
                      width="72"
                      height="72"
                    />
                  </div>
                  <div className="lc-block">
                    <div editable="rich">
                      <p className="h5">Amber E. Smith</p>

                      <p className="text-muted">Patient educator&nbsp;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <ol className="carousel-indicators position-relative mt-3">
          <li
            data-bs-target="#carouselLogos"
            data-bs-slide-to="0"
            className="active bg-dark carousel-control-prev-icon"
          ></li>
          <li
            data-bs-target="#carouselLogos"
            data-bs-slide-to="1"
            className="bg-dark"
          ></li>
        </ol> */}

        <div className="w-100 text-center mt-3">
          <a
            className="carousel-control-prev position-relative d-inline me-4"
            href="#carouselTestimonial"
            data-bs-slide="prev"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="text-dark"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              ></path>
            </svg>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next position-relative d-inline"
            href="#carouselTestimonial"
            data-bs-slide="next"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="text-dark"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoCarousel;
