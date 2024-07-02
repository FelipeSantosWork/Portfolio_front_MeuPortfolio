import DefaultTemplate from "../../../components/DefaultTemplate";
import AboutmeSection from "../../../components/sections/AboutmeSection";
import BannerSection from "../../../components/sections/BannerSection";
import ProjectsSection from "../../../components/sections/ProjectsSection";
import TechSection from "../../../components/sections/TechSection";

const LandingPage = () => {
    return (
        <DefaultTemplate>
            <BannerSection />
            <AboutmeSection />
            <TechSection />
            <ProjectsSection />
        </DefaultTemplate>
    );
};

export default LandingPage;