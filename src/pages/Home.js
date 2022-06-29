import HeroSlider from "../components/HeroSlider";
import IntroArea from "../components/HomePageComponents/IntroArea";
import NewSArea from "../components/HomePageComponents/NewSArea";
import ResearchActivitiesArea from "../components/HomePageComponents/ResearchActivitiesArea";
import UpcamingNewsArea from "../components/HomePageComponents/UpcamingNewsArea";
import VideoIntroArea from "../components/HomePageComponents/VideoIntroArea";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <IntroArea />
      <VideoIntroArea />
      <NewSArea />
      <UpcamingNewsArea />
      <ResearchActivitiesArea />
    </>
  );
};

export default Home;
