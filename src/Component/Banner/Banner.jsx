import React from "react";
import "./Banner.css";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="SectionBanner row">
      <div className="col-sm-6 d-flex flex-column justify-content-center gap-md-4">
        <div className="text-start">
          <h4 className="fs-1 fw-bold">
            Ready to take your <br /> <span id="span">Business Growth</span>{" "}
            <br /> to the next level?
          </h4>
          <p className="text-wrap fs-md-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa
            libero egestas malesuada viverra gravida libero cursus nulla leo
            pulvinar.
          </p>
          <button id="getBtn" className="m-2 p-2 rounded-pill">
            Get in Touch
          </button>
        </div>
        <div className="text-start">
          <p style={{ color: "#64CCC5" }}>Trusted by Leading Brands</p>
          <div className="d-flex  gap-3">
            <p className="brand">Greenish</p>
            <p className="brand">Autometion</p>
            <p className="brand">Leafe</p>
            <p className="brand">Mindfulness</p>
          </div>
        </div>
      </div>
      <div id="bannerImg" className="col-sm-6">
        <img className="bannerImg" style={{}} src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
