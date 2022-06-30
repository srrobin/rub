import "../styles/UpcamingNews.css";
import InfoCarouselArea from "./HomePageComponents/InfoCarouselArea";
import Titletext from "./Titletext";
const UpcamingNews = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Titletext title="Recent and Upcoming Events" />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <div className="custom___card">
                  <div className="card___title_tag">news</div>
                  <div className="card___desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    ipsum dolor sit amet, consectetur adipiscing
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
                    ipsum dolor sit amet, consectetur adipiscing
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
                    ipsum dolor sit amet, consectetur adipiscing t
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
                    ipsum dolor sit amet, consectetur adipiscing
                  </div>
                  <div className="card___target___date">
                    date:: <span>12.6.2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <InfoCarouselArea />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcamingNews;
