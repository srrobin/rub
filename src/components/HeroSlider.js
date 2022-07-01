import { Carousel } from "react-bootstrap";
import { FaBlackberry } from "react-icons/fa";
import ImgTwo from "../images/17th-march_b2.jpeg";
import ImgThree from "../images/Banner_seminar.jpg";
import ImgOne from "../images/noboborsho-22.jpg";
import ImgFour from "../images/rabindra_kacheri.jpg";
import "../styles/Hero.css";
import ReadMoreMinibtn from "./ReadMoreMinibtn";
const HeroSlider = () => {
  return (
    <>
      <Carousel controls={false}>
        <Carousel.Item interval={1000}>
          <div className="overlay"></div>
          <img
            className="d-block w-100 slider___image"
            src={ImgOne}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="wrapper___caption">
              <h3>Welcome to Rabindra University Bangladesh</h3>
              <ul className="list___item">
                <li>
                  {" "}
                  <FaBlackberry className="hero___icon" /> Founded : 1921
                </li>
                <li>
                  <FaBlackberry className="hero___icon" /> Faculty Members :
                  2000+
                </li>
              </ul>
              <ReadMoreMinibtn title="Read More" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="overlay"></div>
          <img
            className="d-block w-100 slider___image"
            src={ImgTwo}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="wrapper___caption">
              <h3>The Glorious Journey</h3>
              <ul className="list___item">
                <li>
                  <FaBlackberry className="hero___icon" /> Departments : 83
                </li>
                <li>
                  {" "}
                  <FaBlackberry className="hero___icon" />
                  Institutes: 13
                </li>
                <li>
                  <FaBlackberry className="hero___icon" /> Research Centers: 54
                </li>
              </ul>
              <ReadMoreMinibtn title="Read More" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="overlay"></div>
          <img
            className="d-block w-100 slider___image"
            src={ImgThree}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="wrapper___caption">
              <h3>RUB Students' Celebrating their Graduation Moment</h3>
              <ul className="list___item">
                <li>
                  {" "}
                  <FaBlackberry className="hero___icon" /> Regular Students :
                  37000 +
                </li>
                <li>
                  {" "}
                  <FaBlackberry className="hero___icon" /> Affiliate College
                  Students : 1,70,100 +
                </li>
              </ul>
              <ReadMoreMinibtn title="Read More" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="overlay"></div>
          <img
            className="d-block w-100 slider___image"
            src={ImgFour}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="wrapper___caption">
              <h3>Second slide label</h3>

              <ul className="list___item">
                <li>
                  {" "}
                  <FaBlackberry className="hero___icon" />
                  consectetur adipiscing elit
                </li>
                <li>
                  {" "}
                  <FaBlackberry className="hero___icon" />
                  consectetur adipiscing elit
                </li>
                <li>
                  {" "}
                  <FaBlackberry className="hero___icon" /> consectetur
                  adipiscing elit
                </li>
                <li>
                  {" "}
                  <FaBlackberry className="hero___icon" />
                  consectetur adipiscing elit
                </li>
              </ul>
              <ReadMoreMinibtn title="Read More" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HeroSlider;
