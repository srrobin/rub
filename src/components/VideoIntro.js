import { FaPlayCircle } from "react-icons/fa";
import "../styles/VideoIntro.css";
const VideoIntro = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: " url('')",
          backgroundPosition: " center ",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="d-flex text-center py-5"
          lc-helper="background"
          style={{
            minHeight: " 30vh",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: " center center",
            backgroundColor: "#eee",
            backgroundImage:
              " url('https://images.unsplash.com/photo-1498079022511-d15614cb1c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYWR1YXRpb24lMjBwYXJ0eXxlbnwwfHwwfHw%3D&w=1000&q=80')",
          }}
        >
          <div className="lc-block  my-3 align-self-center w-100 py-5 video___intro">
            <div editable="">
              <h2 className="title">Welcome to Rabindra University</h2>
              <p>
                Lorem int ipsum dolor sit amet when an unknown printer took a
                galley of type. Vivamus id tempor.
              </p>
            </div>
            <a
              className="glightbox position-absolute"
              href="https://www.youtube.com/watch?v=g5XaXa7DREI"
            >
              <FaPlayCircle className="play___btn" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoIntro;
