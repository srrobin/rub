import HeroSlider from "../components/HeroSlider";
import IntroArea from "../components/HomePageComponents/IntroArea";
import NewSArea from "../components/HomePageComponents/NewSArea";
import VideoIntroArea from "../components/HomePageComponents/VideoIntroArea";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <IntroArea />
      <VideoIntroArea />
      <NewSArea />
    </>
  );
};

export default Home;
