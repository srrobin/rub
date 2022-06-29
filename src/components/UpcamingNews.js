import "../styles/UpcamingNews.css";
import InfoCarouselArea from "./HomePageComponents/InfoCarouselArea";
const UpcamingNews = () => {
  return (
    <>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <div className="custom___card">
                  <div className="card___title_tag">news</div>
                  <div className="card___desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                  <div className="card___target___date">
                    date:: <span>12.6.2022</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="custom___card">
                  <div className="card___title_tag">news</div>
                  <div className="card___desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                  <div className="card___target___date">
                    date:: <span>12.6.2022</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="custom___card">
                  <div className="card___title_tag">news</div>
                  <div className="card___desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                  <div className="card___target___date">
                    date:: <span>12.6.2022</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="custom___card">
                  <div className="card___title_tag">news</div>
                  <div className="card___desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                  <div className="card___target___date">
                    date:: <span>12.6.2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <InfoCarouselArea />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcamingNews;
