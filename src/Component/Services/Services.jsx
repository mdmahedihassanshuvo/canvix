import React from "react";
import "./Services.css";
import { IoPencil } from "react-icons/io5";
import { FaPenNib } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { GiBrain } from "react-icons/gi";
import { FaUserPlus } from "react-icons/fa6";
import { TbDiamondFilled } from "react-icons/tb";

const Services = () => {
  return (
    <div className="serviceSection">
      <h5 className="title text-lg-center">Our Services </h5>
      <p className="text-lg-center subTitle">
        High-impact services <br />
        for your business
      </p>
      <div className="cardContainer">
        <div className="card border d-flex flex-column justify-content-between align-items-start gap-md-5">
          <IoPencil className="rounded-circle bg-black text-light fs-1 p-2" id="icon" />
          <div className="text-black">
            <p className="fw-semibold mb-2 ">Content Marketing </p>
            <p className="cardDetails">
              Our team creates engaging and shareable content that resonates
              with your audience, drives organic traffic
            </p>
          </div>
        </div>
        <div className="card border d-flex flex-column justify-content-between align-items-start gap-md-5">
          <FaPenNib className="rounded-circle bg-black text-light fs-1 p-2" id="icon" />
          <div className="text-black">
            <p className="fw-semibold mb-2 ">Graphic Design </p>
            <p className="cardDetails">
              Unlock the power of visual storytelling with our expert graphic
              design services tailored to elevate your brand and captivate.
            </p>
          </div>
        </div>
        <div className="card border d-flex flex-column justify-content-between align-items-start gap-md-5">
          <GrAnnounce className="rounded-circle bg-black text-light fs-1 p-2" id="icon" />
          <div className="text-black">
            <p className="fw-semibold mb-2 ">Digital Marketing </p>
            <p className="cardDetails">
              Elevate your brand's online presence with our data-driven digital
              marketing strategies. From SEO and content marketing
            </p>
          </div>
        </div>
        <div className="card border d-flex flex-column justify-content-between align-items-start gap-md-5">
          <GiBrain className="rounded-circle bg-black text-light fs-1 p-2" id="icon" />
          <div className="text-black">
            <p className="fw-semibold mb-2 ">Web Design</p>
            <p className="cardDetails">
              We specialize in creating visually stunning, user-friendly
              websites that align with your brand identity and deliver an
              exceptional.
            </p>
          </div>
        </div>
        <div className="card border d-flex flex-column justify-content-between align-items-start gap-md-5">
          <FaUserPlus className="rounded-circle bg-black text-light fs-1 p-2" id="icon" />
          <div className="text-black">
            <p className="fw-semibold mb-2 ">IT Consulting </p>
            <p className="cardDetails">
              IT consulting, or information technology consulting, refers to the
              practice of providing advisory and implementation services
            </p>
          </div>
        </div>
        <div className="card border d-flex flex-column justify-content-between align-items-start gap-md-5">
          <TbDiamondFilled className="rounded-circle bg-black text-light fs-1 p-2" id="icon" />
          <div className="text-black">
            <p className="fw-semibold mb-2 ">Brand Identity </p>
            <p className="cardDetails">
              It involves creating a unique and recognizable identity that sets
              the brand apart from competitors and resonates with the target
              audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
