import "../../styles/ResearchActivitiesArea.css";
import HorizontalCard from "../HorizontalCard";
import ShowallBtn from "../ShowallBtn";
import Titletext from "../Titletext";
const ResearchActivitiesArea = () => {
  return (
    <div className="area___wrapper">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <Titletext title="Research Activities" />
          </div>
          <div className="col-md-8">
            <div className="row">
              <HorizontalCard />
            </div>
          </div>
          <div className="col-md-4">
            <div className="list-group">
              <div className="list___group_head">
                <div className="d-flex w-100 justify-content-between">
                  <div className="mb-1 upcoming___Research___heading">
                    upcoming Research Events
                  </div>
                </div>
              </div>

              <a href="#" class="list-group-item list-group-item-action">
                <div class=" w-100 ">
                  <h5 class="mb-1">Computer Science</h5>
                  <p class="mb-1">
                    Think positive! Read good news from all over the world.
                    Subscribe For Newsletter.
                  </p>
                </div>
                <p class="card-text mt-2">
                  <small class="text-muted">
                    <i class="fas fa-eye"></i>1000 <i class="far fa-user"></i>{" "}
                    admin <i class="fas fa-calendar-alt"></i>Jan 20, 2018{" "}
                  </small>
                </p>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class=" w-100 ">
                  <h5 class="mb-1">Astronomy</h5>
                  <p class="mb-1">
                    Think positive! Read good news from all over the world.
                    Subscribe For Newsletter.
                  </p>
                </div>
                <p class="card-text mt-2">
                  <small class="text-muted">
                    <i class="fas fa-eye"></i>1000 <i class="far fa-user"></i>{" "}
                    admin <i class="fas fa-calendar-alt"></i>Jan 20, 2018{" "}
                  </small>
                </p>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class=" w-100 ">
                  <h5 class="mb-1">Geography</h5>
                  <p class="mb-1">
                    Think positive! Read good news from all over the world.
                    Subscribe For Newsletter.
                  </p>
                </div>
                <p class="card-text mt-2">
                  <small class="text-muted">
                    <i class="fas fa-eye"></i>1000 <i class="far fa-user"></i>{" "}
                    admin <i class="fas fa-calendar-alt"></i>Jan 20, 2018{" "}
                  </small>
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-center align-items-center mt-4">
            <ShowallBtn title="see all Research Activities" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchActivitiesArea;
