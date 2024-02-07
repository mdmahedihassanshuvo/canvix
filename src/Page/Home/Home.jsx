import React from "react";
import Banner from "../../Component/Banner/Banner";
import Services from "../../Component/Services/Services";
import AboutSection from "../../Component/AboutSection/AboutSection";
import Process from "../../Component/Process/Process";
import Showcase from "../../Component/Showcase/Showcase";
import Testimonial from "../../Component/Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="text-primary">
      <Banner />
      <Services />
      <AboutSection />
      <Process />
      <Showcase />
      <Testimonial />
    </div>
  );
};

export default Home;
