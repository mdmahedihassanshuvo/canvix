import "./AboutTalkBar.css";
import talkBar from "../../assets/talkus.png";
import { Link } from "react-router-dom";

const AboutTalkBar = () => {
  return (
    <div id="talkBarSection">
      <img src={talkBar} alt="" />
      <div id="contactBar">
        <h3>Enough talk, let’s get to work </h3>
        <Link to="/contact" style={{textDecoration: "none"}} id="contactBtn">Get in Toutch</Link>
      </div>
    </div>
  );
};

export default AboutTalkBar;
