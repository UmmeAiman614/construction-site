import HomeSlider from "../components/home/HomeSlider";
import HomeServices from "../components/home/HomeServices";
import StatsSection from "../components/common/StatsSection";
import HomeAbout from "../components/home/HomeAbout";
import LatestProjects from "../components/home/LatestProjects";
import HomeTeam from "../components/home/HomeTeam";
import Testimonial from "../components/common/Testimonial";
import HomeBlog from "../components/home/HomeBlog";

const Home = () => {
  return (
    // ✅ Added global fix for horizontal scroll
    <div className="overflow-x-hidden w-full">
      <HomeSlider />
      <HomeServices />
      <StatsSection />
      <HomeAbout />
      <LatestProjects />
      <HomeTeam />
      <Testimonial />
      <HomeBlog />
      {/* Other sections like About, Services, Projects, Testimonials, Blog, Contact can be added here */}
    </div>
  );
};

export default Home;
