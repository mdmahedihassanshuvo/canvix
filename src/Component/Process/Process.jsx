import React from "react";
import "./Process.css";
import { IoBulb } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { RiListSettingsFill } from "react-icons/ri";
import { SiPytest } from "react-icons/si";

const Process = () => {
  return (
    <div className="processSection text-black">
      <h5 className="text-center fw-semibold  text-info ">Process</h5>
      <h3 className="text-center fw-semibold ">
        Process that moves <br />
        things forward
      </h3>
      <div className="processCardContainer">
        <div className="cardItem p-4 border d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center gap-3">
            <p className="text-white bg-black fs-3 px-2 rounded-pill "><IoBulb /></p>
            <p className="processTitle">Ideate</p>
          </div>
          <p className="processText">
            The ideation process is a crucial phase in the design process where
            creative thinking and brainstorming
          </p>
        </div>
        <div className="cardItem p-4 border d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center gap-3">
            <p className="text-white bg-black fs-3 px-2 rounded-pill "><IoMdMail /></p>
            <p className="processTitle">Reserach</p>
          </div>
          <p className="processText">
            The ideation process is a crucial phase in the design process where
            creative thinking and brainstorming
          </p>
        </div>
        <div className="cardItem p-4 border d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center gap-3">
            <p className="text-white bg-black fs-3 px-2 rounded-pill "><RiListSettingsFill /></p>
            <p className="processTitle">Create</p>
          </div>
          <p className="processText">
            The ideation process is a crucial phase in the design process where
            creative thinking and brainstorming
          </p>
        </div>
        <div className="cardItem p-4 border d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center gap-3">
            <p className="text-white bg-black fs-3 px-2 rounded-pill "><SiPytest /></p>
            <p className="processTitle">Testing</p>
          </div>
          <p className="processText">
            The ideation process is a crucial phase in the design process where
            creative thinking and brainstorming
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
