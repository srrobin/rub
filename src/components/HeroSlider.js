import { Carousel } from "react-bootstrap";
import { FaBlackberry } from "react-icons/fa";
import ImgTwo from "../images/17th-march_b2.jpeg";
import ImgThree from "../images/Banner_seminar.jpg";
import ImgOne from "../images/noboborsho-22.jpg";
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
              <h3 data-aos="fade-left">
                Welcome to Rabindra University Bangladesh
              </h3>
              <ul className="list___item">
                <li data-aos="fade-left">
                  {" "}
                  <FaBlackberry className="hero___icon" /> Founded : 1921
                </li>
                <li data-aos="fade-left">
                  <FaBlackberry className="hero___icon" /> Faculty Members :
                  2000+
                </li>
              </ul>
              <div data-aos="fade-up">
                <ReadMoreMinibtn title="Read More" />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="overlay"></div>
          <img
            className="d-block w-100 slider___image"
            src={ImgTwo}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="wrapper___caption">
              <h3
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1010"
              >
                The Glorious Journey
              </h3>
              <ul className="list___item">
                <li data-aos="fade-left">
                  <FaBlackberry className="hero___icon" /> Departments : 83
                </li>
                <li data-aos="fade-left">
                  {" "}
                  <FaBlackberry className="hero___icon" />
                  Institutes: 13
                </li>
                <li data-aos="fade-left">
                  <FaBlackberry className="hero___icon" /> Research Centers: 54
                </li>
              </ul>
              <div data-aos="fade-up">
                <ReadMoreMinibtn title="Read More" />
              </div>
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
              <h3 data-aos="fade-left">
                RUB Students' Celebrating their Graduation Moment
              </h3>
              <ul className="list___item">
                <li data-aos="fade-left">
                  {" "}
                  <FaBlackberry className="hero___icon" /> Regular Students :
                  37000 +
                </li>
                <li data-aos="fade-left">
                  {" "}
                  <FaBlackberry className="hero___icon" /> Affiliate College
                  Students : 1,70,100 +
                </li>
              </ul>
              <div data-aos="fade-up">
                <ReadMoreMinibtn title="Read More" />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* 
        <Carousel.Item>
          <div className="overlay"></div>
          <img
            className="d-block w-100 slider___image"
            src={ImgFour}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="wrapper___caption">
              <h3
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                Second slide label
              </h3>

              <ul className="list___item">
                <li
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="700"
                >
                  {" "}
                  <FaBlackberry className="hero___icon" />
                  consectetur adipiscing elit
                </li>
                <li
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  {" "}
                  <FaBlackberry className="hero___icon" />
                  consectetur adipiscing elit
                </li>
                <li
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="900"
                >
                  {" "}
                  <FaBlackberry className="hero___icon" /> consectetur
                  adipiscing elit
                </li>
                <li
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  {" "}
                  <FaBlackberry className="hero___icon" />
                  consectetur adipiscing elit
                </li>
              </ul>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="500"
              >
                <ReadMoreMinibtn title="Read More" />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
};

export default HeroSlider;
