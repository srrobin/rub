import Counter from "./Counter";

const IntroItem = () => {
  return (
    <div className="container">
      <div className="row">
        <Counter />
        <div className="col-md-6">
          <div className="lc-block  " style={{ letterSpacing: "10px" }}>
            <div editable="">
              <h2>
                <strong>OUR STORY</strong>
              </h2>
            </div>
          </div>
          <div className="lc-block">
            <div editable="">
              <p>
                <strong>
                  In 2016, Rabindra University, Bangladesh started its journey
                  as the 40th government university in the country.
                </strong>
              </p>
            </div>
          </div>
          <div className="lc-block">
            <div editable="">
              <p>
                In 2016, Rabindra University, Bangladesh started its journey as
                the 40th government university in the country. Its permanent
                campus will be constructed about 8 km west of Shahjadpur upazila
                town of Sirajganj. At present educational activities are running
                on temporary campuses in three colleges of Shahjadpur city. At
                present there are 5 departments in the university. Honorary
                Vice-Chancellor of the University of Rajshahi University
                <b> Professor of Marketing. Md. Shah Azam.</b>
              </p>
            </div>
          </div>
          <div className="lc-block">
            <div editable="">
              <p>
                <em>
                  Pellentesque eu dolor in enim efficitur dapibus id quis nisi.
                  Quisque interdum bibendum vulputate. Nunc dui lacus, ultrices
                  id gravida tempor, sollicitudin dapibus nisl. Vivamus dictum
                  quam in purus commodo molestie. Mauris ultricies tortor urna.
                  Praesent non aliquet lectus. Sed eget massa mauris.
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroItem;
