import React from "react";
import show1 from "../../assets/show1.png";
import show2 from "../../assets/show2.png";
import show3 from "../../assets/show3.png";
import show4 from "../../assets/show4.png";
import "./Showcase.css";

const Showcase = () => {
  return (
    <div className="showcaseSection text-black">
      <h2 id="showTitle" className="fw-semibold  text-center">Recent Showcase</h2>
      <div className="cardContainer">
        <div>
          <div className="showCard">
            <img className="w-100" src={show1} alt="" />
            <p className="mt-3 mb-0 fs-4 ">Web UI design</p>
            <p className="fs-6 fw-lighter " style={{ color: "#0C0C0C" }}>
              Creative UI design
            </p>
          </div>
          <div className="showCard">
            <img className="w-100" src={show2} alt="" />
            <p className="mt-3 mb-0 fs-4 ">To design Digital Strategy</p>
            <p className="fs-6 fw-lighter " style={{ color: "#0C0C0C" }}>
              Social Media Marketing
            </p>
          </div>
        </div>
        <div className="" id="showCard">
          <div className="showCard">
            <img className="w-100" src={show3} alt="" />
            <p className="mt-3 mb-0 fs-4 ">UI Design</p>
            <p className="fs-6 fw-lighter " style={{ color: "#0C0C0C" }}>
              Creative Rebranding for logo
            </p>
          </div>
          <div className="showCard">
            <img className="w-100" src={show4} alt="" />
            <p className="mt-3 mb-0 fs-4 ">UI Design</p>
            <p className="fs-6 fw-lighter " style={{ color: "#0C0C0C" }}>
              Creative Rebranding for logo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
