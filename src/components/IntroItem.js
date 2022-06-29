const IntroItem = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4 align-self-center">
          <div
            className="lc-block border-top py-4"
            style={{ letterSpacing: "10px" }}
          >
            <div editable="">
              <h2>
                <strong>OUR STORY</strong>
              </h2>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="lc-block">
            <div editable="">
              <p>
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  faucibus porttitor dui, in vestibulum metus pulvinar sit amet.
                  Phasellus finibus fermentum eros quis maximus.&nbsp;
                </strong>
              </p>
            </div>
          </div>
          <div className="lc-block">
            <div editable="">
              <p>
                Mauris sollicitudin, ante quis suscipit molestie, est tellus
                semper nunc, quis porttitor tellus tortor et orci. Quisque
                egestas gravida eros et tristique. Praesent arcu turpis, rhoncus
                at nunc ut, ornare ultrices purus.
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
                  Praesent non aliquet lectus. Sed eget massa mauris. Vestibulum
                  euismod cursus tortor, et aliquet orci facilisis eu. Cras
                  ultricies luctus dolor quis laoreet. Suspendisse nisi massa,
                  feugiat in dignissim sed, fermentum sed nibh.
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
