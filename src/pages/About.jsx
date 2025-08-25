import PageHeader from "../components/common/PageHeader";
import AboutContent from "../components/about/AboutContent";
import AboutExperience from "../components/about/AboutExperience";
import AboutTeam from "../components/about/AboutTeam";
import StatsSection from "../components/common/StatsSection";
import Testimonial from "../components/common/Testimonial";



const About = () => {
    return (
        <div>
            <PageHeader
                title="About Us"
                bgImage="/assets/page-header.jpg"
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "About Us" } // last one has no path
                ]}
            />

            <AboutContent />
            <StatsSection />
            <AboutExperience />
            <Testimonial />
            <AboutTeam />
        </div>
    );
}


export default About;