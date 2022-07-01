import "../styles/NewsCard.css";
import ShowallBtn from "./ShowallBtn";
import Titletext from "./Titletext";
const NewsCard = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Titletext title="Latest News" />
          </div>
          <div className="col-md-4">
            <div className="card">
              <a href="#">
                <img
                  className="card-img-top"
                  src="http://www.rub.ac.bd/global/img/Banner/VCsir_Ministry.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Courtesy call on the Minister of Education by the
                    Vice-Chancellor of Rabindra University
                  </h5>
                  <p className="card-text">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    accusantium ad alias, aliquid amet aspernatur atque culpa
                    cum debitis dicta doloremque, dolorum ea eos et excepturi
                    explicabo facilis harum illo impedit incidunt laborum
                    laudantium...{" "}
                  </p>
                  <p className="card-text">
                    <small class="text-muted">
                      <i class="fas fa-eye"></i>1000 <i class="far fa-user"></i>{" "}
                      admin <i class="fas fa-calendar-alt"></i>Jan 20, 2018{" "}
                    </small>
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <a href="#">
                <img
                  className="card-img-top"
                  src="http://www.rub.ac.bd/global/img/gallery/h1.jpg"
                  alt="Card image cap"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Celebration Homecoming Day of Father of the Nation
                    Bangabandhu Sheikh Mujibur Rahman
                  </h5>
                  <p className="card-text">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    accusantium ad alias, aliquid amet aspernatur atque culpa
                    cum debitis dicta doloremque, dolorum ea eos et excepturi
                    explicabo facilis harum illo impedit incidunt laborum
                    laudantium...{" "}
                  </p>
                  <p className="card-text">
                    <small class="text-muted">
                      <i class="fas fa-eye"></i>1000 <i class="far fa-user"></i>{" "}
                      admin <i class="fas fa-calendar-alt"></i>Jan 20, 2018{" "}
                    </small>
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <a href="#">
                <img
                  className="card-img-top"
                  src="card-img-top"
                  src="http://www.rub.ac.bd/global/img/Banner/21feb_22_01.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Rabindra University Pays Homage to Language Martyrs' and
                    Celebrates International Mother Language Day.
                  </h5>
                  <p className="card-text">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    accusantium ad alias, aliquid amet aspernatur atque culpa
                    cum debitis dicta doloremque, dolorum ea eos et excepturi
                    explicabo facilis harum illo impedit incidunt laborum
                    laudantium...{" "}
                  </p>
                  <p className="card-text">
                    <small class="text-muted">
                      <i class="fas fa-eye"></i>1000 <i class="far fa-user"></i>{" "}
                      admin <i class="fas fa-calendar-alt"></i>Jan 20, 2018{" "}
                    </small>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-center align-items-center mt-4">
            <ShowallBtn title="see all Latest News" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
