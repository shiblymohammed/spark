import Hero from '../components/Home/Hero';
import Intro from '../components/Home/Intro';
// import VideoZoomSection from '../components/Home/VideoZoomSection';
import Accommodation from '../components/Accommodation';
import DiningSection from '../components/Home/DiningSection'; 
import ParallaxHero from '../components/Home/ParallaxHero';
import ContactSection from '../components/Home/ContactSection';
import Destinations from '../components/Home/Destinations';

const Home = () => {
  return (
    <div>
      <Hero />
      <Intro />
      {/* <VideoZoomSection /> */}
        <Accommodation />
        <DiningSection />
        <Destinations />
        <ContactSection />  
    </div>
  );
};

export default Home;
