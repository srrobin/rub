import "../styles/UpcamingNews.css";
import InfoCarouselArea from "./HomePageComponents/InfoCarouselArea";
import ShowallBtn from "./ShowallBtn";
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
                <div className="custom____card">
                  <div className="card___title_tag">news</div>
                  <div className="card___desc">
                    Memorandum of Understanding signed between Rabindra
                    University and Nazrul University
                  </div>
                  <div className="card___target___date">
                    date:: <span>12.6.2022</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="custom____car">
                  <div className="card___title_tag">news</div>
                  <div className="card___desc">
                    Courtesy call and exchange of greetings with Hon'ble Chief
                    Justice
                  </div>
                  <div className="card___target___date">
                    date:: <span>12.6.2022</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="custom____car">
                  <div className="card___title_tag">news</div>
                  <div className="card___desc">
                    Courtesy call on the Minister of Education by the
                    Vice-Chancellor of Rabindra University
                  </div>
                  <div className="card___target___date">
                    date:: <span>12.6.2022</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="custom____car">
                  <div className="card___title_tag">news</div>
                  <div className="card___desc">
                    Colorful Decoration at Shahjadpur Rabindra Kachari Bari, 3
                    days long Rabindra Festival
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
          <div className="col-md-12 d-flex justify-content-center align-items-center mt-4">
            <ShowallBtn title="see all  Upcoming Events" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcamingNews;
