import "../styles/GroupItem.css";
import Titletext from "./Titletext";

const GroupIntro = () => {
  return (
    <div className="container py-6">
      <div className="row align-items-center">
        <div className="col-md-12">
          <Titletext title="Message from teacher" />
        </div>
        <div className="col-xl-6">
          <div className="card card-body shadow border-0">
            <div className="d-inline-flex " style={{ minHeight: "392px" }}>
              <div className="">
                <div className="bg-light">
                  <img
                    className="group___image___item"
                    src="http://www.rub.ac.bd/global/img/vc/vcsir_picture.jpg"
                  />
                  <div className="item__intro">
                    <div className="name">
                      Professor Dr. A. S. M. Maksud Kamal
                    </div>
                    <div className="position">
                      Pro-Vice Chancellor (Academic)
                    </div>
                    <p className="disc">
                      {" "}
                      Welcome to the University of Dhaka’s website, featuring
                      the oldest, largest and the premier multidisciplinary
                      premier multidisciplinary university of Bangladesh!
                      Founded in 1921, Welcome to the University of Dhaka’s
                      website, featuring the oldest, largest and the premier
                      multidisciplinary premier multidisciplinary university of
                      Bangladesh! Founded in 1921,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6 row row-cols-1 row-cols-md-2  g-3 counter-1">
          <div className="col ">
            <div className="card card-body shadow border-0">
              <div className="d-inline-flex " style={{ minHeight: "196px" }}>
                <div className="">
                  <div className="bg-light">
                    <img
                      className="group___image___item"
                      src="https://d30fl32nd2baj9.cloudfront.net/media/2021/09/29/farhana-rabindra-univ-sirajganj-290921-01.jpg/ALTERNATES/w640/farhana-rabindra-univ-sirajganj-290921-01.jpg"
                    />
                    <div className="item__intro">
                      <div className="name">
                        Professor Dr. A. S. M. Maksud Kamal
                      </div>
                      <div className="position">
                        Pro-Vice Chancellor (Academic)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-body shadow border-0">
              <div className="d-inline-flex " style={{ minHeight: "196px" }}>
                <div className="">
                  <div className="bg-light">
                    <img
                      className="group___image___item"
                      src="https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc="
                    />
                    <div className="item__intro">
                      <div className="name">
                        Professor Dr. A. S. M. Maksud Kamal
                      </div>
                      <div className="position">
                        Pro-Vice Chancellor (Academic)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-body shadow border-0">
              <div className="d-inline-flex " style={{ minHeight: "196px" }}>
                <div className="">
                  <div className="bg-light">
                    <img
                      className="group___image___item"
                      src="https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc="
                    />
                    <div className="item__intro">
                      <div className="name">
                        Professor Dr. A. S. M. Maksud Kamal
                      </div>
                      <div className="position">
                        Pro-Vice Chancellor (Academic)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-body shadow border-0">
              <div className="d-inline-flex " style={{ minHeight: "196px" }}>
                <div className="">
                  <div className="bg-light">
                    <img
                      className="group___image___item"
                      src="http://www.rub.ac.bd/global/img/rub/Sharmin_econ.jpg"
                    />
                    <div className="item__intro">
                      <div className="name">
                        Professor Dr. A. S. M. Maksud Kamal
                      </div>
                      <div className="position">
                        Pro-Vice Chancellor (Academic)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupIntro;
