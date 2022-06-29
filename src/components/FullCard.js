const FullCard = () => {
  return (
    <div className="container p-0 overflow-hidden">
      {/* <div className="row g-0">
        <div
          lc-helper="background"
          className="col-lg-6 order-lg-2 "
          style={{
            minHeight: "45vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage:
              " url('https://images.unsplash.com/photo-1558985590-e84f133009b2?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80')",
          }}
        ></div>
        <div className="col-lg-6 order-lg-1 my-auto px-5 py-5">
          <div className="lc-block">
            <div editable="rich">
              <h1>Your Title goes here</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem
                Lorem int ipsum dolor sit amet when an unknown printer took a
                galley of type. Vivamus id tempor felis. Cras sagittis mi sit
                amet malesuada mollis. Mauris porroinit consectetur cursus
                tortor vel interdum.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="row g-0">
        <div
          className="col-lg-6"
          style={{
            minHeight: "40vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGyLiL9amzWYLHDizXDHSuKv_MKvTKmVpSUZEZQukqU8KNOZud8erS4zc_4c7tlUiEWc&usqp=CAU')",
          }}
        ></div>
        <div className="col-lg-6 my-auto px-5 py-5">
          <div className="lc-block">
            <div editable="rich">
              <h1>Your Title goes here</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem
                Lorem int ipsum dolor sit amet when an unknown printer took a
                galley of type. sit amet Neque porro quisquam est qui dolorem
                Lorem int ipsum dolor sit amet when an unknown printer took a
                galley of type.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCard;
