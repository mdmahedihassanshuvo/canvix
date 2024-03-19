import { Helmet } from "react-helmet-async";
import "./About.css";
import AboutBanner from "../../Component/AboutBanner/AboutBanner";
import AboutCategory from "../../Component/AboutCategory/AboutCategory";
import AboutTeam from "../../Component/AboutTeam/AboutTeam";

const About = () => {
  return (
    <div>
      <Helmet title="Canvix - About" />
      <AboutBanner />
      <AboutCategory />
      <AboutTeam />
    </div>
  );
};

export default About;
