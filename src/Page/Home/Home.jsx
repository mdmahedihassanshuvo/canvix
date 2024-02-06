import React from "react";
import Banner from "../../Component/Banner/Banner";
import Services from "../../Component/Services/Services";
import AboutSection from "../../Component/AboutSection/AboutSection";

const Home = () => {
  return (
    <div className="text-primary">
      <Banner />
      <Services />
      <AboutSection/>
    </div>
  );
};

export default Home;
