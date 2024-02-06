import React from "react";
import "./AboutSection.css";
import reg1 from "../../assets/reg1.png";
import reg2 from "../../assets/reg2.png";
import reg3 from "../../assets/reg3.png";
import { IoMdArrowDropright } from "react-icons/io";

const AboutSection = () => {
  return (
    <div className="aboutSection  bg-dark ">
      <div id="imageContainer " className="imageContainer">
        <img id="regImage1" className="regImage" src={reg1} alt="" />
        <img id="regImage2" className="regImage" src={reg2} alt="" />
        <img id="regImage3" className="regImage" src={reg3} alt="" />
      </div>
      <div className="text-white">
        <p className="text-info fw-semibold">About us </p>
        <h4 className="fs-1 fw-medium ">
          The core mission <br />
          behind all our <br />
          work
        </h4>
        <p className="fw-light " style={{fontSize: "12px "}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut
          tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
        </p>
        <div className="d-flex justify-align-content-around align-items-center gap-5 ">
          <div>
            <h4 className="fw-semibold text-info">330 +</h4>
            <p style={{fontSize: "10px"}}>Companies helped</p>
          </div>
          <div>
            <h4 className="fw-semibold text-info">230 +</h4>
            <p style={{fontSize: "10px"}}>Revenue generated</p>
          </div>
        </div>
        <button id="trailBtn" className="border-0 py-2 px-1 rounded-pill d-flex justify-content-center align-items-center gap-2">
          <IoMdArrowDropright className="bg-dark text-white rounded-pill " /> Start your Free Trial
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
