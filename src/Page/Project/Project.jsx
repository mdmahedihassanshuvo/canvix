import "./Project.css";
import portfolio1 from "../../assets/portfolio1.png";
import portfolio2 from "../../assets/portfolio2.png";
import portfolio3 from "../../assets/portfolio3.png";
import portfolio4 from "../../assets/portfolio4.png";
import portfolio5 from "../../assets/portfolio5.png";
import portfolio6 from "../../assets/portfolio6.png";
import AboutTalkBar from "../../Component/AboutTalkBar/AboutTalkBar";

const Project = () => {
  return (
    <div className="portfolioSection">
      <div id="portfolioBanner">
        <h3>Our Portfolio</h3>
      </div>
      <div id="portfolio">
        <div id="portfolio-Content">
          <img src={portfolio1} alt="" />
          <div>
            <h5>Web UI design</h5>
            <p>Creative UI design</p>
          </div>
        </div>
        <div id="portfolio-Content">
          <img src={portfolio2} alt="" />
          <div>
            <h5>Web UI design</h5>
            <p>Creative UI design</p>
          </div>
        </div>
        <div id="portfolio-Content">
          <img src={portfolio3} alt="" />
          <div>
            <h5>Web UI design</h5>
            <p>Creative UI design</p>
          </div>
        </div>
        <div id="portfolio-Content">
          <img src={portfolio4} alt="" />
          <div>
            <h5>Web UI design</h5>
            <p>Creative UI design</p>
          </div>
        </div>
        <div id="portfolio-Content">
          <img src={portfolio5} alt="" />
          <div>
            <h5>Web UI design</h5>
            <p>Creative UI design</p>
          </div>
        </div>
        <div id="portfolio-Content">
          <img src={portfolio6} alt="" />
          <div>
            <h5>Web UI design</h5>
            <p>Creative UI design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
