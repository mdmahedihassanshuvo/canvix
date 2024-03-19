import "./AboutTeam.css";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import { FiFacebook } from "react-icons/fi";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const AboutTeam = () => {
  return (
    <div className="team">
      <h3 className="text-center">Our Team</h3>
      <div id="teamSlideContainer">
        <div>
          <div id="imageContainer">
            <img src={team1} alt="" />
            <div className="socialLink">
              <FiFacebook id="socialLink" />
              <CiInstagram id="socialLink" />
              <CiLinkedin id="socialLink" />
            </div>
          </div>
          <p className="name">Esther Howards</p>
          <p className="designation">Founder & CEO</p>
        </div>
        <div>
          <div id="imageContainer">
            <img src={team2} alt="" />
            <div className="socialLink">
              <FiFacebook id="socialLink" />
              <CiInstagram id="socialLink" />
              <CiLinkedin id="socialLink" />
            </div>
          </div>
          <p className="name">Cameron Williamson</p>
          <p className="designation">Marketing Head</p>
        </div>
        <div>
          <div id="imageContainer">
            <img src={team3} alt="" />
            <div className="socialLink">
              <FiFacebook id="socialLink" />
              <CiInstagram id="socialLink" />
              <CiLinkedin id="socialLink" />
            </div>
          </div>
          <p className="name">Liam Cooper</p>
          <p className="designation">Marketing Head</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
