const InfoCarousel = () => {
  return (
    <div className="lc-block py-5 text-center">
      <div
        id="carouselTestimonial"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner px-5">
          <div className="carousel-item">
            <div className="row">
              <div className="lc-block">
                <div editable="rich">
                  <p className="rfs-8 text-muted">
                    "Exchange of Eid greetings from the Vice Chancellor of
                    Rabindra University"
                  </p>
                </div>
              </div>
              <div className="lc-block">
                <div className="lc-block d-inline-flex">
                  <p class="card-text">
                    <small class="text-muted">
                      <i class="fas fa-eye"></i>1000 <i class="far fa-user"></i>{" "}
                      admin <i class="fas fa-calendar-alt"></i>Jan 20, 2018{" "}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="lc-block">
                <div editable="rich">
                  <p className="rfs-8">
                    "Colorful Decoration at Shahjadpur Rabindra Kachari Bari, 3
                    days long Rabindra Festival"
                  </p>
                </div>
              </div>
              <div className="lc-block">
                <div className="lc-block d-inline-flex">
                  <p class="card-text">
                    <small class="text-muted">
                      <i class="fas fa-eye"></i>1000 <i class="far fa-user"></i>{" "}
                      admin <i class="fas fa-calendar-alt"></i>Jan 20, 2018{" "}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="row">
              <div className="lc-block">
                <div editable="rich">
                  <p className="rfs-8">
                    "Exchange of Eid greetings from the Vice Chancellor of
                    Rabindra University"
                  </p>
                </div>
              </div>
              <div className="lc-block">
                <div className="lc-block d-inline-flex">
                  <p class="card-text">
                    <small class="text-muted">
                      <i class="fas fa-eye"></i>1000 <i class="far fa-user"></i>{" "}
                      admin <i class="fas fa-calendar-alt"></i>Jan 20, 2018{" "}
                    </small>
                  </p>
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
