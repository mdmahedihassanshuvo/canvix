import './AboutBanner.css'
import aBanner1 from "../../assets/aBanner1.png";
import aBanner2 from "../../assets/aBanner2.png";
import aBanner3 from "../../assets/aBanner3.png";

const AboutBanner = () => {
  return (
    <div className="bg-black" id="about-banner">
      <div className="side1">
        <h3>
          Ready to take <br />
          <span className="text-info">your business </span> <br />
          to the next level?
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa
          libero egestas malesuada viverra gravida libero cursus nulla leo
          pulvinar.
        </p>
      </div>
      <div className="side2">
        <img id="sImg1" src={aBanner1} alt="" />
        <img id="sImg2" src={aBanner2} alt="" />
        <img id="sImg3" src={aBanner3} alt="" />
      </div>
    </div>
  );
};

export default AboutBanner;
