import React from "react";
import Banner from "../../Component/Banner/Banner";
import Services from "../../Component/Services/Services";
import AboutSection from "../../Component/AboutSection/AboutSection";
import Process from "../../Component/Process/Process";

const Home = () => {
  return (
    <div className="text-primary">
      <Banner />
      <Services />
      <AboutSection />
      <Process />
    </div>
  );
};

export default Home;
