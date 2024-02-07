import React from "react";
import "./Testimonial.css";
import test from "../../assets/test.png";
import { BiLeftArrowCircle } from "react-icons/bi";
import { TbCircleArrowRight } from "react-icons/tb";

const Testimonial = () => {
  return (
    <div className="testimonialSection text-black ">
      <img id="img" src={test} alt="" />
      <p>
        “Be genuine in your assessment, and provide constructive feedback to
        benefit both potential customers and the company providing the product
        or service.”
      </p>
      <div
        id="paginationBtn"
        className="fs-3 d-flex  justify-content-center  align-items-center gap-3"
      >
        <button className="border-0 bg-white rounded-pill">
          <BiLeftArrowCircle />
        </button>
        <button className="border-0 bg-white rounded-pill">
          <TbCircleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
